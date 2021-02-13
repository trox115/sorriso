/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Dentes from './Dentes';

function Emitir({
  users,
  getClientes,
  getdocCategorias,
  documento,
  servicos,
  getServicos,
  categorias,
  getCategorias,
  inserirOrcamento,
  ...props
}) {
  const [selectedDate, setSelectedDate] = useState(
    new Date('2021-01-25T21:11:54')
  );

  const [cliente, setCliente] = useState();
  const [categoria, setCategoria] = useState();
  const [servico, setServico] = useState();

  useEffect(() => {
    if (_.isEmpty(users.users)) {
      getClientes();
    }

    if (_.isEmpty(documento?.categoria)) {
      getdocCategorias();
    }

    if (_.isEmpty(servicos.servicos)) {
      getServicos();
    }

    if (_.isEmpty(categorias.categorias)) {
      getCategorias();
    }
  }, [
    users,
    getClientes,
    getdocCategorias,
    documento,
    servicos,
    getServicos,
    categorias,
    getCategorias,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (categoria === 4) {
      inserirOrcamento({ cliente, categoria, servico, validade: selectedDate });
    }
  };

  let options = [];

  if (servicos.servicos && categorias.categorias) {
    options = _.map(servicos.servicos, (option) => {
      const firstLetter = option.nome[0].toUpperCase();
      const cat = _.find(categorias.categorias, { id: option.categoria_id });
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        categoria: cat?.nome,
        ...option,
      };
    });
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Serviços</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li>
                <i className="fa fa-home"></i>&nbsp;
                <a className="parent-item" href="index.html">
                  Home
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li>
                <a className="parent-item" href="">
                  {' '}
                  Serviços
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Emitir Documento</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Serviços</header>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <Autocomplete
                      options={users?.users}
                      getOptionLabel={(option) => option.nome}
                      onChange={(event, value) =>
                        setCliente(value ? value.id : null)
                      }
                      onFocus
                      style={{ minWidth: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Cliente"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <Autocomplete
                      options={documento?.categoria}
                      getOptionLabel={(option) => option.nome}
                      onChange={(event, value) =>
                        setCategoria(value ? value.id : null)
                      }
                      onFocus
                      style={{ minWidth: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tipo"
                          variant="outlined"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    {categoria === 4 && (
                      <Autocomplete
                        id="grouped-demo"
                        options={options.sort(
                          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                        )}
                        groupBy={(option) => option.categoria}
                        fullWidth
                        onChange={(event, value) => setServico(value.id)}
                        getOptionLabel={(option) => option.nome}
                        style={{ minwidth: 300 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Tratamento"
                            variant="outlined"
                          />
                        )}
                      />
                    )}
                  </div>
                </div>

                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    {true && (
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          label="Validade"
                          format="MM/dd/yyyy"
                          fullWidth
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    )}
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    {true && <Dentes cliente={cliente} tratamento={null} />}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 p-t-20 text-center">
              <button
                type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                onClick={handleSubmit}
              >
                Submeter
              </button>
              <button
                type="button"
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Emitir.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({
  users: state.users,
  servicos: state.servicos,
  documento: state.documentos,
  categorias: state.categorias,
});

const mapDispatchToProps = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
  getdocCategorias: () => dispatch.documentos.loadDocCategorias(),
  getServicos: () => dispatch.servicos.loadServicos(),
  getCategorias: () => dispatch.categorias.loadCategorias(),
  inserirOrcamento: (obj) => dispatch.documentos.inserirOrcamento(obj),
});

export default connect(mapStateToProps, mapDispatchToProps)(Emitir);
