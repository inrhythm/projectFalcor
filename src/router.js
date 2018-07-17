import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PeoplePage from './Components/PeoplePage/PeoplePage'
import PersonEdit from './Components/PersonEdit/PersonEdit'
import AdminIndex from './Components/AdminIndex/AdminIndex'
import PersonalPage from "./Components/PersonalPage/PersonalPage";

const Router = () => (
   <Switch>
      <Route exact path='/' component={PeoplePage}/>
      <Route path='/register' component={PersonEdit}/>
      <Route path='/admin' component={AdminIndex}/>
      <Route path='/person/:id' component={PersonalPage}/>
   </Switch>
);

export default Router
