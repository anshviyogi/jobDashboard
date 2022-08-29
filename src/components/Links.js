import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Appilied from './Appilied'
import Profile from './Profile'
import SideBar from './SideBar'
import Status from './Status'

function Links() {
  return (
    <div>
            <Router>
      <Switch>
{/* Status Page */}

<Route path='/status'>
<Status/>
</Route>


{/* Appilied Route */}

      <Route path='/appilied'>
        <div className='row'>
          <div className='col-sm-1'>
  <SideBar/>
  </div>
  <div className='col-sm-11'>
  <Appilied/>
  </div>
  </div>
</Route>


{/* Main Page / Profile Page Route */}

        <Route exact path='/'>
          <div className='row'>
            <div className='col-sm-1'>
            <SideBar/>
            </div>
            <div className='col-sm-11'>
              <Profile/>
            </div>
          </div>
        </Route>


      </Switch>
    </Router>
    </div>
  )
}

export default Links