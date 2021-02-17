import React, { useState } from 'react';
import SubHeader from '../SubHeader/SubHeader';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import _ from 'lodash';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function DetalhesConsula({ inserirPagamento, editarConsulta, ...props }) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  console.log(props);
  const { consulta, consulta:{cliente, tratamentos} } = props.location.query;
  const divida = consulta.custo - consulta.pagamento;
  const [pagamento, setPagamento] = useState({
    metodo: 'Multibanco',
    recebido: divida,
    troco: 0,
  });
  const classes = useStyles();
  const pagamentos = ['Multibanco', 'Dinheiro'];

  const fazerPagamento = async (e) => {
    e.preventDefault();
    await inserirPagamento({
      cliente_id: consulta.cliente.id,
      consulta_id: consulta.id,
      metodo: pagamento.metodo,
      valor: pagamento.recebido,
      troco: pagamento.troco,
    });
    await editarConsulta({
      id: consulta.id,
      pagamento: consulta.pagamento + pagamento.recebido - pagamento.troco,
    });
    props.history.push('/verConsultas');
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Novo Pagamento</h2>
      <Autocomplete
        options={pagamentos}
        getOptionLabel={(option) => option}
        onChange={(event, value) =>
          setPagamento({ ...pagamento, metodo: value })
        }
        onFocus
        defaultValue={pagamento.metodo}
        style={{ minWidth: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Metodo" variant="outlined" />
        )}
      />

      <br />
      <TextField
        label="Valor Recebido"
        variant="outlined"
        type="number"
        value={pagamento.recebido}
        onChange={(event, value) =>
          setPagamento({ ...pagamento, recebido: event.target.value })
        }
      />

      <br />
      <br />
      {pagamento.recebido > divida && (
        <TextField
          label="Troco"
          type="text"
          variant="outlined"
          disabled
          value={`${pagamento.recebido - divida} €`}
        />
      )}
      <br />
      <br />
      <button
        type="button"
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
        onClick={fazerPagamento}
      >
        Pagar
      </button>
    </div>
  );
  return (
    <div className="page-content-wrapper">
      <SubHeader title="Consulta" />
      <div className="page-content">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="m-b-20">
                <div className="doctor-profile">
                  <div className={'profile-header bg-b-green'}>
                    <div className="user-name">{cliente.nome}</div>
                    <div className="name-center">{cliente.dataNascimento}</div>
                  </div>
                  <img
                    src="assets/img/user/usrbig1.jpg"
                    className="user-img"
                    alt=""
                  />
                  <p>{cliente.morada}</p>
                  <div>
                    <p>
                      <i className="fa fa-phone"></i>
                      <a href={`tel:${cliente.telefone}`}>{cliente.telefone}</a>
                    </p>
                  </div>
                  <div className="profile-userbuttons">
                    <Link
                      to={`/cliente/${cliente.id}`}
                      className="btn btn-circle deepPink-bgcolor btn-sm"
                    >
                      Ver Ficha
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <div className="card card-box">
              <div className="card-head">
                <header>Serviços Efetuados</header>
              </div>
              <div className="card-body ">
                <div className="table-scrollable">
                  <table
                    className="table table-hover table-checkable order-column full-width"
                    id="example4"
                  >
                    <thead>
                      <tr>
                        <th className="center"></th>
                        <th className="center"> Serviço </th>
                        <th className="center"> Dente </th>
                        <th className="center"> Custo </th>
                      </tr>
                    </thead>
                    <tbody>
                   
                      {_.map(tratamentos, (tratamento, index) => {
                        return (
                          <tr className="odd gradeX" key={1}>
                        <td className="user-circle-img">
                          <img src="assets/img/user/user1.jpg" alt="" />
                        </td>
                        <td className="center">{tratamento.servico.nome}</td>
                        <td className="center">{tratamento.dente}
                        </td>
                        <td className="center">{tratamento.servico.custo}€
                        </td>
                      </tr>);
                      })}
                    </tbody>
                  </table>
                  {divida > 0 && (
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                      onClick={() => setOpen(true)}
                    >
                      Adicionar Pagamento
                    </button>
                  )}
                  <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {body}
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          {consulta.image && (
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="card card-box">
                <div className="card-head">
                  <header>Imagem</header>
                </div>
                <div className="card-body ">
                  <img src={consulta.image?.url} alt="Imagem da consulta" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  inserirPagamento: (obj) => dispatch.pagamentos.inserirPagamento(obj),
  editarConsulta: (obj) => dispatch.consultas.editarConsultas(obj),
});

export default withRouter(connect(null, mapDispatchToProps)(DetalhesConsula));
