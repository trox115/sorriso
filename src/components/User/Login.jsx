import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import logo1 from './logo1.png'
import LockIcon from '@material-ui/icons/Lock';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const [state, setstate] = useState({email:'', password:''});

  const handleChange = (e) => {
    setstate({...state, [e.target.name]: e.target.value});
  }
  const {user} = useSelector(state => state.user)
  const history = useHistory(); 
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch.user.logIn(state).then(() => {
      if(user){
      history.push('/');
    }
    })
    .catch(error => error);
  }  
  return (
    <div className='login'>
      <div className='form-container'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='logo-container'>
            <img src={logo1} alt='Design do SOrriso' />
          </div>
          <h1 className='text'>
            Login
          </h1>
          <TextField
          id='input'
          type='text'
          fullWidth
          label='Email'
          onChange= {handleChange}
          name='email'
          />
          <TextField
          id='input'
          type='password'
          fullWidth
          onChange= {handleChange}
          label='Password'
          name='password'
          />
          <Button
        variant="contained"
        color="default"
        className
        type='submit'
        startIcon={<LockIcon />}
      >Login</Button>
          </form>
      </div>
    </div>
  );
}
