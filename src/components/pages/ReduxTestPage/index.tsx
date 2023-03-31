import { Paper } from '@mui/material'
import React from 'react'
import Profile from '../../organisms/Profile'
import Login from '../../organisms/Login'
import ChangeColor from '../../organisms/ChangeColor'
import { Stack } from '@mui/system'

const ReduxTestPage = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around' ,height:'100vh', width:'100vw' ,alignItems:'center'}}>
   <Paper  elevation={3} sx={{padding:'20px'}}>
    <Stack direction='column' gap={2}>
    <Profile />
    <Login />
    <ChangeColor />
    </Stack>
   </Paper>
   
   </div>
  )
}

export default ReduxTestPage