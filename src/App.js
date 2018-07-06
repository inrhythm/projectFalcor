import React, { Component } from 'react';
import './styles/main.scss';
import PersonEdit1 from './Components/PersonEdit/PersonEdit.1';

class App extends Component {

   render() {
      return (
         <div className="app">
            <PersonEdit1 />
         </div>
      );
   }
}

export default App;
