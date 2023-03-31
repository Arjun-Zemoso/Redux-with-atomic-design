import { Stack } from '@mui/system';
import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from "react-redux"; // To manipulates
import { login, logout } from '../../../features/user'
import Button from '../../atoms/Button';
import InputField from '../../atoms/InputField';

const Login = () => {
const [userName,setUserName]=useState('');
const [userAge,setUserAge]=useState('18');
const [userEmail,setUserEmail]=useState('');
const dispatch = useDispatch();

const handleLoginClick=()=>{
    dispatch(login({ name: userName, age: userAge, email: userEmail }))
}

const handleLogoutClick=()=>{
   dispatch(logout()) 
}

const handleAgeChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setUserAge(e.target.value);
}

const handleEmailChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setUserEmail(e.target.value);
}

const handleUserNameChange=(e:ChangeEvent<HTMLInputElement>)=>{
    setUserName(e.target.value);
}
  return (
    <Stack direction='column' gap={2} >
        <InputField type='text' value={userName} label='User Name' placeholder='Enter User name' handleChange={handleUserNameChange}  />
        <InputField type='number' value={userAge} label='Age'  handleChange={handleAgeChange}  />
        <InputField type='email' value={userEmail} label='Email' handleChange={handleEmailChange}/>
   
    <Stack direction='row' gap={2} >
         <Button handleClick={handleLoginClick}>Login</Button>
        <Button handleClick={handleLogoutClick}>Logout</Button>
    </Stack>
    </Stack>
  )
}

export default Login