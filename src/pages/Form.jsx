import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { BASE_URL } from '../utilis/utilis';
import swal from 'sweetalert';
import axios from 'axios';

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    password: "",
  })

  const onHandleChange = (e)=>{
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  const onHandleClick = ()=>{
    axios.post(`${BASE_URL}/create-data`, userData).then((res)=>{
      if(res.status === 201){
        swal("Good job!", "You clicked the button!", "success");
      }
    })
  }
  const {name, surname, password} = userData;
  return (
    <div  className='container'>
      <div className="form-box">
        <div className="form">
            <h1>REGISTER</h1>
            <TextField id="standard-basic" label="Name" variant="standard" onChange={onHandleChange} name="name"/>
            <TextField id="standard-basic" label="Surname" variant="standard" onChange={onHandleChange} name="surname"/>
            <TextField id="standard-basic" label="Password" variant="standard" type="password" onClick={onHandleChange} name="password"/>
            <Button variant="contained" color="success" onClick={onHandleClick} disabled={(userData.name=="" || userData.surname=="" || userData.password.length <= 8 )} >register</Button>
        </div>
      </div>
    </div>
  )
}

export default Form;
