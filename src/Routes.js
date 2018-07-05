import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Components/Login/Login';
import PersonEdit from './Components/PersonEdit/PersonEdit';

const Routes = () => (
   <routes>
     <Switch>
       <Route path='/login' component={Login}/>
       <Route path='/people/edit' component={PersonEdit} />
     </Switch>
   </routes>
 )

 export default Routes;
