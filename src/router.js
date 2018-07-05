import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/home'
import Register from './Components/PersonEdit/PersonEdit'

const Router = () => (
  <div>
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path='/register' component={Register}/>
    </Switch>
  </div>
)

export default Router
