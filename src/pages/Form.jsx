import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Form = () => {
  return (
    <div  className='container'>
      <div className="form-box">
        <div className="form">
            <h1>REGISTER</h1>
            <TextField id="standard-basic" label="Name" variant="standard"/>
            <TextField id="standard-basic" label="Surname" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" type="password" />
            <Button variant="contained" color="success">register</Button>


        </div>
      </div>
    </div>
  )
}

export default Form;
