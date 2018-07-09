import React,{ Component } from 'react';
import './styles/main.scss';
import Router from './router';
import Header from './Components/header.js';


class App extends Component {
render() {
      return (
         <div>
            <div>
               <Header />
               <Router />
            </div>
         </div>
      );
   }
}

export default App;
