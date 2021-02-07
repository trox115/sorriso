import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { toDate, parse, format } from 'date-fns';
import moment from 'moment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import _ from 'lodash';
import { connect } from 'react-redux';
import SubHeader from '../SubHeader/SubHeader';

function NovoCliente({ inserirCliente }) {
  const [novoUser, setUser] = useState({
    nome: '',
    bi: '',
    nif: '',
    utente: '',
    email: '',
    seguro: '',
    telefone: '',
    morada: '',
    observacoes: '',
    dataNascimento: '',
  });

  const [newUser, setNew] = useState(novoUser);

  useEffect(() => {
    if (!_.isEqual(newUser, novoUser)) {
      setUser(newUser);
    }
  }, [newUser, novoUser, setUser]);

  const handleChange = (event) => {
    setNew({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    inserirCliente(novoUser);
  };

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Novo Cliente</header>
                <div className="tools">
                  <a
                    className="fa fa-repeat btn-color box-refresh"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-collapse btn-color fa fa-chevron-down"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-close btn-color fa fa-times"
                    href="javascript:;"
                  ></a>
                </div>
              </div>
              <div className="card-body ">
                <div className="card-box">
                  <div className="card-body row">
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          onChange={handleChange}
                          name="nome"
                          label="Nome"
                          fullWidth
                          value={novoUser.nome}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          label="BI/CC"
                          onChange={handleChange}
                          name="bi"
                          fullWidth
                          value={novoUser.bi}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          label="NIF"
                          onChange={handleChange}
                          name="nif"
                          fullWidth
                          value={novoUser.nif}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          label="Email"
                          onChange={handleChange}
                          name="email"
                          fullWidth
                          value={novoUser.email}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          label="Cartão de Utente"
                          onChange={handleChange}
                          name="utente"
                          fullWidth
                          value={novoUser.utente}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                        <InputLabel id="demo-simple-select-label">
                          Seguro?
                        </InputLabel>

                        <Select
                          value={novoUser.seguro}
                          fullWidth
                          name="seguro"
                          defaultValue={true}
                          onChange={handleChange}
                        >
                          <MenuItem value={true}>Sim</MenuItem>
                          <MenuItem value={false}>Não</MenuItem>
                        </Select>
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <TextField
                          label="telemovel"
                          name="telefone"
                          onChange={handleChange}
                          fullWidth
                          value={novoUser.telefone}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Data de Nascimento"
                            name="dataNascimento"
                            format="dd/MM/yyyy"
                            value={novoUser.dataNascimento}
                            onChange={handleChange}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </div>
                    </div>
                    <div className="col-lg-12 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield txt-full-width">
                        <InputLabel id="demo-simple-select-label">
                          Morada
                        </InputLabel>

                        <TextField
                          rows={2}
                          rowsMax={4}
                          fullWidth
                          defaultValue={novoUser.morada}
                          onChange={handleChange}
                          name="morada"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 p-t-20">
                      <div class="mdl-textfield mdl-js-textfield txt-full-width">
                        <InputLabel id="demo-simple-select-label">
                          Observações
                        </InputLabel>

                        <TextField
                          rows={2}
                          rowsMax={4}
                          fullWidth
                          defaultValue={novoUser.observacoes}
                          onChange={handleChange}
                          name="observacoes"
                        />
                      </div>
                    </div>
                    <div class="col-lg-12 p-t-20 text-center">
                      <button
                        type="button"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                        onClick={handleClick}
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
      </div>
    </div>
  );
}
const mapDispatch = (dispatch) => ({
  inserirCliente: (obj) => dispatch.users.inserirCliente(obj),
});

export default connect(null, mapDispatch)(NovoCliente);
