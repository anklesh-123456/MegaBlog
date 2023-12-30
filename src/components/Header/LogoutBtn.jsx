import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authService.logout().then(() =>{
            dispatch(logout())
        })        
    }
  return (
    <button 
    className=' inline-block px-4 duration-200 hover:text-yellow-500  py-1'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn