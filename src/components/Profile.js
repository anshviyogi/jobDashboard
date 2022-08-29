import React from 'react'
import './Profile.css'

function Profile() {
    const looking = ['Web Development','Java']    
    const skills = ['HTML','CSS','Java','JavaScript','Express','NodeJS','MongoDB','ReactJS']
    const role = ['Software Developer']

  return (
    <div className='profile'>
      <h1 style={{textAlign:"center"}}>Your Profile</h1>
      
        <h3 className='profile-title'>Profile Page</h3>

        <div className='about'>
            {/* Name , Short Description , Photo  */}
            <div className='aboutHeader'>
            <img src="https://yt3.ggpht.com/ytc/AKedOLTi8zkFss7wl4P4w-HjTVXFV29z4q57L0cpjMHymA=s900-c-k-c0x00ffffff-no-rj" className='profilePic'/>
            <div className='nameDesc'>
            <h4 className='profileName'>Ansh Viyogi</h4>
            <span className='desc'>1 year of exp • Bareilly, India • 0.5 hours behind • Open to remote/office</span>
            </div>
            </div>

            {/* About Me */}
            <div className='aboutMe'>
                <span className='about-text'>About</span>
                <p className='job-text'>I'm a MERN Developer with having a 1+ year of experience in this field
I'm have done many projects as a MERN Developer which has been posted on my GitHub Profile given below
(Github : www.github.com/anshviyogi)
And also,
I've worked as a Full Stack Developer in "44Kart" where I've build the complete E-Commerce Website for the company which took me 2-3 months to deliver that website. (Website Link : www.44kart.com)
And I've done an internship in Mobzway as a Front End Developer.

Only few of my projects has been posted on my GitHub profile 
I've also worked on the project like YouTube Clone , Instagram Clone , etc . . .</p>
            </div>

            {/* Looking for */}
            
            <div className='lookingFor'>
                <span className='looking-text'>Looking for</span>
                <div className='looking-items'>
                {looking.map(lf =>{
                   return <h6 className='items'>{lf}</h6>
                })}
                </div>
            </div>

{/* Skills */}

            <div className='skills'>
              <span className='skill-title'>Skills</span>
              <div className='skill-list'>
                {skills.map(skillList =>{
                  return <h6 className='items'>{skillList}</h6>
                })}
              </div>
            </div>

            {/* Desired Role */}

            <div className='desiredRole'>
              <span className='role-title'>Desired Role</span>
              <div className='role-list'>
                {role.map(roleList =>{
                 return <h6 className='items'>{roleList}</h6>
                })}
              </div>
            </div>
        </div>

    </div>
  )
}

export default Profile