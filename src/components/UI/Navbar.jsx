// import { LogoDev } from '@mui/icons-material'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Navbar = () => {
const dispatch=useDispatch()
const {logout}=authActions
    const logoutHandler=()=>{
        dispatch(logout());
    }
  return (
    <AppBar sx={{
        top: '0',
        right: '0',
        left: '0',
        bgcolor: 'orange',
      }} >
        <Toolbar>
          <Typography variant="h4" noWrap sx={{ flexGrow: '1' }} component="div">
          Mail Box Client
          </Typography>
       
          <Button
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={logoutHandler}       >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar