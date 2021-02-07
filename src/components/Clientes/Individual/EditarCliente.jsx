import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { toDate, parse, format } from 'date-fns';
import moment from 'moment';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import _ from 'lodash';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function EditarCliente({ user, editarClientes }) {
  const [novoUser, setUser] = useState({
    nome: user.nome,
    bi: user.bi,
    nif: user.nif,
    utente: user.utente,
    email: user.email,
    seguro: user.seguro,
    telefone: user.telefone,
    morada: user.morada,
    observacoes: user.observacoes,
    dataNascimento: moment(user.dataNascimento, 'DD/MM/yyyy').toDate(),
  });

  const [newUser, setNew] = useState({
    nome: user.nome,
    bi: user.bi,
    nif: user.nif,
    utente: user.utente,
    email: user.email,
    seguro: user.seguro,
    telefone: user.telefone,
    morada: user.morada,
    observacoes: user.observacoes,
    dataNascimento: moment(user.dataNascimento, 'DD/MM/yyyy').toDate(),
  });
  const history = useHistory();

  useEffect(() => {
    if (!_.isEqual(newUser, novoUser)) {
      setUser(newUser);
    }
  }, [newUser, novoUser, setUser]);

  const handleChange = (event) => {
    setNew({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await editarClientes({ id: user.id, ...novoUser });
    history.goBack();
  };

  return (
    <>
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
              <InputLabel id="demo-simple-select-label">Seguro?</InputLabel>

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
              <InputLabel id="demo-simple-select-label">Morada</InputLabel>

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
              <InputLabel id="demo-simple-select-label">Observações</InputLabel>

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
    </>
  );
}
const mapDispatch = (dispatch) => ({
  editarClientes: (obj) => dispatch.users.editarClientes(obj),
});

export default connect(null, mapDispatch)(EditarCliente);
