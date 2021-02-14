import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import logo1 from './logo1.png'
import LockIcon from '@material-ui/icons/Lock';

import './Login.css';
export default function Login() {
  const [state, setstate] = useState({email:'', passoword:''});

  const handleChange = (e) => {
    setstate({...state, [e.target.name]: e.target.value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
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
