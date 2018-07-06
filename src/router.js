import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People from './Components/People/People'
import PersonEdit from './Components/PersonEdit/PersonEdit'
import AdminIndex from './Components/AdminIndex/AdminIndex'

const Router = () => (
	<Switch>
	  <Route exact path='/' component={People}/>
	  <Route path='/register' component={PersonEdit}/>
	  <Route path='/admin' component={AdminIndex}/>
	</Switch>
)

export default Router
