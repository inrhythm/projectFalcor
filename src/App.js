import React, { Component } from 'react';
import './App.scss';

import MasonryGallery from "./components/masonry_component.js";
import FilterDropdown from "./components/filter_dropdown_component.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterDropdown />
        <MasonryGallery />
      </div>
    );
  }
}

export default App;
