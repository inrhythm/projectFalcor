import React from 'react';
import './styles/main.scss';
import PersonEdit from './Components/PersonEdit/PersonEdit';
import Login from './Components/Login/Login';
import Routes from './Routes';

class App extends React.Component {

   render() {
      return (
         <div className="app">
            <Routes />
         </div>
      );
   }
}

export default App;
