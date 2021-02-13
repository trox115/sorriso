/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

function InserirServico({ categorias, inserirServico, getCategorias }) {
  const [servico, setServico] = useState({
    nome: '',
    categoria: '',
    custo: '',
  });

  useEffect(() => {
    if (_.isEmpty(categorias.categorias)) {
      getCategorias();
    }
  }, [categorias, inserirServico, getCategorias]);

  const handleChange = (e) => {
    e.preventDefault();
    setServico({ ...servico, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inserirServico(servico);
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
                  Serviços
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Inserir Serviços</li>
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
                    <TextField
                      label="Nome do Serviço"
                      onChange={handleChange}
                      name="nome"
                      fullWidth
                      value={servico.nome}
                    />
                  </div>
                </div>
                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <Autocomplete
                      id="combo-box-demo"
                      name="categoria"
                      onChange={(event, value) =>
                        setServico({ ...servico, categoria: value.id })
                      }
                      options={categorias.categorias}
                      getOptionLabel={(option) => option.nome}
                      style={{ minWidth: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="categoria"
                          label="Categoria"
                          variant="outlined"
                        />
                      )}
                    />{' '}
                  </div>
                </div>

                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Custo/Total"
                      onChange={handleChange}
                      name="custo"
                      type="number"
                      fullWidth
                      value={servico.custo}
                    />
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
      </div>
    </div>
  );
}

const mapState = (state) => ({
  categorias: state.categorias,
  servicos: state.servicos,
});

const mapDispatch = (dispatch) => ({
  inserirServico: (obj) => dispatch.servicos.inserirServico(obj),
  getCategorias: () => dispatch.categorias.loadCategorias(),
});

export default connect(mapState, mapDispatch)(InserirServico);
