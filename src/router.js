import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People from './Components/PeoplePage/PeoplePage'
import PersonEdit from './Components/PersonEdit/PersonEdit'

const Router = () => (
	<Switch>
	  <Route exact path='/' component={People}/>
	  <Route path='/register' component={PersonEdit}/>
	</Switch>
)

export default Router
