import React from 'react';
import './styles/main.scss';
//import PersonEdit from './Components/PersonEdit/PersonEdit';
import { Link } from 'react-router-dom'
import Router from './router'

class App extends React.Component {

   render() {
      return (
        <div>
          <Link to='/home'>Home</Link><br/>
          <Link to='/register'>register</Link>
          <Router />
        </div>
      );
   }
}

export default App;
