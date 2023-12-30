import React, {useState} from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { HiMenuAlt3 } from 'react-icons/hi'

function Header() {
  const [open, setOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: "Home",
      slug: '/',
      active: true,
    },
    {
      name: "Login",
      slug: '/login',
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: '/add-post',
      active: authStatus,
    },
  ]
  return (
    <header className=' py-1  bg-blue-600  text-white font-bold flex justify-center items-center   w-full left-0 top-0 transition-transform duration-300 shadow-lg z-[999]'>
    <Container >
    <nav className='flex items-center justify-between p-2'>
    <div className=' mr-4'>
    <Link to='/'>
    <Logo/>
    </Link>
    </div>
<div className="  md:block hidden  font-medium  rounded-bl-full">
    <ul className='flex ml-auto '>
    {navItems.map((item) =>
      item.active ? (
        <li key={item.name}>
        <button 
        onClick={() => navigate(item.slug)}
        className=' inline-block px-4  duration-200 hover:text-yellow-500 py-1'
        >{item.name}</button>
        </li>
      ) : null
      )}

      {authStatus && (
        <li>
        <LogoutBtn/>
        </li>
      )}
    </ul>
    </div>
   
    <div onClick={()=> setOpen(!open)}
    className='z-[999] text-white text-4xl md:hidden m-3 cursor-pointer'>
     
    {open ? <CgClose name='menu'/> : <HiMenuAlt3 name="menu" /> }
   </div>
   <div className={`md:hidden text-white absolute w-[45%] h-screen  font-medium bg-blue-600 shadow-lg top-0 duration-300 z-[999] ${open ? 'right-0' : 'right-[-100%]'}`}>
   <ul className='flex flex-col py-[120px] h-full gap-8 px-10 text-lg'>
   {navItems.map((item) =>
     item.active ? (
       <li onClick={()=> setOpen(false)} key={item.name}>
       <button 
       onClick={() => navigate(item.slug)}
       className='  mx-5  duration-200 hover:text-yellow-500'
       >{item.name}</button>
       </li>
     ) : null
     )}

     {authStatus && (
       <li>
       <LogoutBtn/>
       </li>
     )}
   </ul>
   </div>

    </nav>
    </Container>
    </header>
  )
}

export default Header