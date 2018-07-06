import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People from './Components/People/People'
import PersonEdit from './Components/PersonEdit/PersonEdit'
import Login from './Components/Login/Login'

const Router = () => (
	<Switch>
	  <Route exact path='/' component={People}/>
     <Route path='/register' component={PersonEdit}/>
     <Route path='/login' component={Login}/>
	</Switch>
)

export default Router
