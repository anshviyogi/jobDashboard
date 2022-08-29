import React,{useState} from 'react'
import './Appilied.css'
import {Link} from 'react-router-dom'

function Appilied() {


// Companyies object
  const company = [
  {
    id:1,
    name:"Avitas",
    title:"ReactJS Developer"
  }
]


  return (
    
    <div className='appilied'>

      <h1 style={{textAlign:"center"}}>Your Profile</h1>
        <h3 className='appilied-title'>Applied Jobs</h3>

        <div className='appilied-jobs-list'>
          <Link to='/status'>
          <div className='companies'>
          {company.map(companyList =>{
            return(
              <>
              <h4>{companyList.name}</h4>
              <span>{companyList.title}</span>
              </>
            )
          })}
</div>
</Link>

        </div>
    </div>
  )
}

export default Appilied