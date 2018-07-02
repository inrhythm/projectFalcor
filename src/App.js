import React, { Component } from 'react';
import './App.scss';

import MasonryGallery from './components/masonry_component.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MasonryGallery />
      </div>
    );
  }
}

export default App;
