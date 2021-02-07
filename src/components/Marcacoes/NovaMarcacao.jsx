/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

function NovaMarcacao({ users, getClientes }) {
  const [cliente, setCliente] = useState();
  useEffect(() => {
    if (_.isEmpty(users.users)) {
      getClientes();
    }
  }, [users, getClientes]);
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Adicionar Marcação</div>
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
                  Marcações
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Nova Marcação</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Adicionar nova Marcação</header>
                <button
                  id="panel-button"
                  className="mdl-button mdl-js-button mdl-button--icon pull-right"
                  data-upgraded=",MaterialButton"
                >
                  <i className="material-icons">more_vert</i>
                </button>
                <ul
                  className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  data-mdl-for="panel-button"
                >
                  <li className="mdl-menu__item">
                    <i className="material-icons">assistant_photo</i>Action
                  </li>
                  <li className="mdl-menu__item">
                    <i className="material-icons">print</i>Another action
                  </li>
                  <li className="mdl-menu__item">
                    <i className="material-icons">favorite</i>Something else
                    here
                  </li>
                </ul>
              </div>
              <div className="card-body row">
                <div className="col-lg-12 p-t-20">
                  <div className="col-lg-9 col-md-8">
                    <Autocomplete
                      options={users.users}
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
                {!cliente && (
                  <>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="txtLasttName"
                        />
                        <label className="mdl-textfield__label">Nome</label>
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <input
                          className="mdl-textfield__input"
                          type="email"
                          id="txtemail"
                        />
                        <label className="mdl-textfield__label">Email</label>
                        <span className="mdl-textfield__error">
                          Introduza um endereço válido
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          pattern="-?[0-9]*(\.[0-9]+)?"
                          id="text5"
                        />
                        <label className="mdl-textfield__label" for="text5">
                          Nif
                        </label>
                        <span className="mdl-textfield__error">
                          Número Obrigatório
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          pattern="-?[0-9]*(\.[0-9]+)?"
                          id="text5"
                        />
                        <label className="mdl-textfield__label" for="text5">
                          BI/CC
                        </label>
                        <span className="mdl-textfield__error">
                          Número Obrigatório
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <input
                          className="mdl-textfield__input"
                          type="text"
                          id="txtCity"
                        />
                        <label className="mdl-textfield__label">Cidade</label>
                      </div>
                    </div>
                  </>
                )}
                <div className="col-lg-6 p-t-20">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Data"
                      fullWidth
                      name="dataNascimento"
                      format="dd/MM/yyyy"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>

                <div className="col-lg-6 p-t-20">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Hora"
                      fullWidth
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>

                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea
                      className="mdl-textfield__input"
                      rows="4"
                      id="education"
                    ></textarea>
                    <label className="mdl-textfield__label" for="text7">
                      Observações
                    </label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20 text-center">
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                  >
                    Gravar
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
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
});

export default connect(mapState, mapDispatch)(NovaMarcacao);
