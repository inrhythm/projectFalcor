import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/People/people_page'
import Register from './Components/PersonEdit/PersonEdit'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/register' component={Register}/>
    </Switch>
  </div>
)

export default Router
