import React, { Component } from 'react';
import './App.scss';

import PeoplePage from "./components/people_page.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeoplePage />
      </div>
    );
  }
}

export default App;
