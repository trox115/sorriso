import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { connect, useDispatch } from 'react-redux';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import DateFnsUtils from '@date-io/date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import ptLocale from '@fullcalendar/core/locales/pt';

import SubHeader from '../SubHeader/SubHeader';
import { DeleteButton, SaveButton } from '../Botoes/Botoes';

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

function Agenda2({
  users,
  getClientes,
  inserirMarcacao,
  marcacoes,
  loadMarcacoes,
  editarmarcacoes,
  inserirCliente,
}) {
  const dispatch = useDispatch()
  const [novoUser, setUser] = useState({
    nome: null,
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
  const [events, setEvents] = useState([]);
  const [modalStyle] = useState(getModalStyle);
  const [novoCliente, setNovo] = useState(false);
  const [openModal, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: 'Nova Marcação',
    start: null,
    end: null,
    tipo: 'dentista',
    color: '#257e4a',
    cliente: {},
  });
  useEffect(() => {
    async function loading() {
      await loadMarcacoes();
      await getClientes();
    }
    loading();
  }, [getClientes, loadMarcacoes]);

  

  useEffect(() => {
    if (!_.isEmpty(marcacoes.marcacoes) && !_.isEmpty(users.users)) {
      const novosEventos = [];
      for (const marcacao of marcacoes.marcacoes) {
        const user = _.findIndex(users.users, { id: marcacao.cliente_id });
        novosEventos.push({
          id: marcacao.id,
          title: users.users[user].nome,
          tipo: marcacao.tipo,
          start: marcacao.start,
          end: marcacao.end,
          clienteId: users.users[user].id,
          color: handleEventColor(marcacao.tipo)
        });
      }
      setEvents(novosEventos);
    }
  }, [getClientes, loadMarcacoes, marcacoes, users]);

  useEffect(() => {}, [newEvent, events]);
  const remove = async (e) => {
    await dispatch.marcacoes.removerMarcao({id:newEvent.id});
        setOpenEdit(false);
  }
  const handleChange = async (e) => {
    const uId = users.users[users.users.length - 1].id + 1;
    if (novoUser.nome !== null) {
      await inserirCliente(novoUser);
      await getClientes();
      setNewEvent({
        ...newEvent,
        cliente: {
          id: uId,
          nome: novoUser.nome,
        },
      });
    }
    const color = handleEventColor(newEvent.tipo)
    const marcacao = {
      title: newEvent.cliente?.nome ? newEvent.cliente.nome : novoUser.nome,
      start: moment(newEvent.start).format('YYYY-MM-DD HH:mm'),
      end: moment(newEvent.end).format('YYYY-MM-DD HH:mm'),
      tipo: newEvent.tipo,
      cliente: newEvent.cliente,
      color
    };
    setEvents([...events, marcacao]);
    await inserirMarcacao({
      cliente_id: newEvent.cliente?.id || uId,
      start: moment(newEvent.start),
      tipo: newEvent.tipo,
      end: moment(newEvent.end),
    });
    setOpen(false);
  };

  function handleEventColor(tipo) {
    switch (tipo) {
      case 'dentista':
        return 'rgba(34, 167, 240, 1)'

      case 'medicina':
        return 'rgba(240, 52, 52, 1)'
      case 'nuticionista':
        return 'rgba(245, 230, 83, 1)'

      case 'nutrição':
        return 'rgba(118, 93, 105, 1)'

      case 'psicologia':
        return 'rgba(52, 73, 94, 1)'

      default:
        return 'rgba(34, 167, 240, 1)'
    }
  }

  const handleDateClick = (arg) => {
    const begining = moment(arg.dateStr).format('YYYY-MM-DD HH:mm:ss');
    setNewEvent({
      start: begining,
      end: moment(begining).add(2, 'hours').format('YYYY-MM-DD HH:mm'),
    });
    setOpen(true);
    // setEvents([...events, newEvent]);
  };
  const classes = useStyles();

  const clickEvent = (eventClickInfo) => {
    console.log(eventClickInfo);
    setNewEvent({
      id: parseInt(eventClickInfo.event.id, 10),
      cliente: eventClickInfo.event.title,
      start: moment(eventClickInfo.event.start),
      end: moment(eventClickInfo.event.end),
    });
    setOpenEdit(true);
  };

  const dragEvent = (eventClickInfo) => {
    const payload = {
      id: parseInt(eventClickInfo.event.id, 10),
      cliente_id: eventClickInfo.event.extendedProps.clienteId,
      start: moment(eventClickInfo.event.start),
      end: moment(eventClickInfo.event.end),
    };
    editarmarcacoes(payload);
  };

  

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Nova Marcação</h2>
      <FormControlLabel
        control={
          <Checkbox
            checked={novoCliente}
            onChange={() => setNovo(!novoCliente)}
            name="checkedB"
            color="primary"
          />
        }
        label="Novo Cliente?"
      />
      {!novoCliente && (
        <Autocomplete
          options={users.users}
          getOptionLabel={(option) => option.nome}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, cliente: value })
          }
          defaultValue={newEvent.cliente}
          style={{ minWidth: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Cliente" variant="outlined" />
          )}
        />
      )}

      
      {novoCliente && (
        <TextField
          onChange={(event, value) => setUser({ nome: event.target.value })}
          name="nome"
          label="Nome"
          fullWidth
          value={novoUser.nome}
        />

        
      )}

<Autocomplete
          options={['dentista', 'psicologia', 'medicina', 'nutrição']}
          getOptionLabel={(option) => option}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, tipo: value })
          }
          style={{ minWidth: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo" variant="outlined" />
          )}
        />

      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          label="Inicio"
          fullWidth
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          ampm={false}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, start: event })
          }
          value={newEvent.start}
        />
      </MuiPickersUtilsProvider>
      <br />
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          label="Fim"
          fullWidth
          ampm={false}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          value={newEvent.end}
          onChange={(event, value) => setNewEvent({ ...newEvent, end: event })}
        />
      </MuiPickersUtilsProvider>
      <br></br>
      <SaveButton onClick={handleChange} />
    </div>
  );

  const body2 = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Apagar Marcação</h2>
      <FormControlLabel
        control={
          <Checkbox
            checked={novoCliente}
            onChange={() => setNovo(!novoCliente)}
            name="checkedB"
            color="primary"
          />
        }
        label="Novo Cliente?"
      />
      {!novoCliente && (
        <Autocomplete
          options={users.users}
          getOptionLabel={(option) => option.nome}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, cliente: value })
          }
          defaultValue={newEvent.cliente}
          style={{ minWidth: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Cliente" variant="outlined" />
          )}
        />
      )}

      
      {novoCliente && (
        <TextField
          onChange={(event, value) => setUser({ nome: event.target.value })}
          name="nome"
          label="Nome"
          fullWidth
          value={novoUser.nome}
        />

        
      )}

<Autocomplete
          options={['dentista', 'psicologia', 'medicina', 'nutrição']}
          getOptionLabel={(option) => option}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, tipo: value })
          }
          style={{ minWidth: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Tipo" variant="outlined" />
          )}
        />

      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          label="Inicio"
          fullWidth
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          ampm={false}
          onChange={(event, value) =>
            setNewEvent({ ...newEvent, start: event })
          }
          value={newEvent.start}
        />
      </MuiPickersUtilsProvider>
      <br />
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardTimePicker
          margin="normal"
          label="Fim"
          fullWidth
          ampm={false}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          value={newEvent.end}
          onChange={(event, value) => setNewEvent({ ...newEvent, end: event })}
        />
      </MuiPickersUtilsProvider>
      <br></br>
      <SaveButton onClick={handleChange} />
      <DeleteButton onClick={remove} />

    </div>
  );

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Agenda Dentista</header>
              </div>
              <div className="card-body ">
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="timeGridWeek"
                  slotMinTime="08:00:00"
                  headerToolbar={{
                    left: 'dayGridMonth,timeGridWeek,timeGridDay',
                    center: 'title',
                    right: 'prevYear,prev,next,nextYear',
                  }}
                  locale={ptLocale}
                  slotMaxTime="21:00:00"
                  Draggable="true"
                  eventDrop={dragEvent}
                  eventClick={clickEvent}
                  editable="true"
                  eventResize={dragEvent}
                  eventColor= {handleEventColor(newEvent.tipo)}
                  events={events}
                  dateClick={handleDateClick}
                />
                <Modal
                  open={openModal}
                  onClose={() => setOpen(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body}
                </Modal>
                <Modal
                  open={openEdit}
                  onClose={() => setOpenEdit(false)}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {body2}
                </Modal>
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
  marcacoes: state.marcacoes,
});

const mapDispatch = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
  inserirMarcacao: (obj) => dispatch.marcacoes.inserirMarcacao(obj),
  loadMarcacoes: () => dispatch.marcacoes.loadMarcacoes(),
  editarmarcacoes: (obj) => dispatch.marcacoes.editarmarcacoes(obj),
  inserirCliente: (obj) => dispatch.users.inserirCliente(obj),
});

export default connect(mapState, mapDispatch)(Agenda2);
