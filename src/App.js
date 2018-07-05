import React from 'react';
import './styles/main.scss';
import { Link } from 'react-router-dom';
import Router from './router';
import Header from './Components/header.js';

class App extends React.Component {

   render() {
      return (
        <div>
          <Header />
          <Router />
        </div>
      );
   }
}

export default App;
