import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export function DeleteButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick = {onClick}
      >
        Apagar
      </Button>
  )
}


export function SendButton() {
  const classes = useStyles();

  return (
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Enviar
      </Button>
  )
}

export function SaveButton({ onClick }) {
  const classes = useStyles();

  return (
    <Button
    variant="contained"
    color="primary"
    size="large"
    onClick= {onClick}
    className={classes.button}
    startIcon={<SaveIcon />}
  >
    Gravar
  </Button>
  )
}