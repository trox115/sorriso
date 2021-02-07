import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { connect } from 'react-redux';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers';

import SubHeader from '../SubHeader/SubHeader';

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

function Agenda2({ users, getClientes }) {
  const [events, setEvents] = useState([
    {
      title: 'event 1',
      start: moment().format('YYYY-MM-DD HH:mm:ss'),
      end: moment().add(2, 'hours'),
    },
  ]);
  const [modalStyle] = useState(getModalStyle);
  const [cliente, setCliente] = useState(null);
  const [openModal, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: 'Nova Marcação',
    start: null,
    end: null,
  });
  useEffect(() => {
    getClientes();
  }, []);

  useEffect(() => {}, [newEvent, events]);

  const handleChange = (e) => {
    const marcacao = {
      title: newEvent.title,
      start: moment(newEvent.start).format('YYYY-MM-DD HH:mm'),
      end: moment(newEvent.end).format('YYYY-MM-DD HH:mm'),
    };
    setEvents([...events, marcacao]);
    console.log(events);
  };

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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Nova Marcação</h2>
      <Autocomplete
        options={users.users}
        getOptionLabel={(option) => option.nome}
        onChange={(event, value) =>
          setNewEvent({ ...newEvent, title: value.nome })
        }
        onFocus
        style={{ minWidth: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Cliente" variant="outlined" />
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
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
          value={newEvent.end}
          onChange={(event, value) => setNewEvent({ ...newEvent, end: event })}
        />
      </MuiPickersUtilsProvider>
      <br></br>
      <button onClick={handleChange}> Submeter </button>
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
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView="timeGridWeek"
                  slotMinTime="08:00:00"
                  slotMaxTime="21:00:00"
                  Draggable="true"
                  editable="true"
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

export default connect(mapState, mapDispatch)(Agenda2);
