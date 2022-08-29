import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import  './SideBar.css'

function SideBar() {
  return (
    <div className='sideBar'>
        <div className='menu-item'>
        <Link to='/'>
            <AccountCircleIcon className='accountIcon'/>
            <br/>
            <span className='profile'>Profile</span>
        </Link>
        </div>
        
        <div className='menu-item'>
        <Link to='/appilied'>
            <WorkIcon className='accountIcon'/>
            <br/>
            <span className='profile'>Appilied</span>
        </Link>
        </div>
    </div>
  )
}

export default SideBar