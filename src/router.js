import React from 'react'
import { Switch, Route } from 'react-router-dom'
import People_page from './Components/People/people_page'
import PersonEdit from './Components/PersonEdit/PersonEdit'
import PersonEdit1 from './Components/PersonEdit/PersonEdit.1'

const Router = () => (
	<Switch>
	  <Route exact path='/' component={People_page}/>
	  <Route path='/register' component={PersonEdit}/>
		<Route path='/test' component={PersonEdit1} />
	</Switch>
)

export default Router
