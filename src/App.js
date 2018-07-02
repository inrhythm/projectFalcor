import React, { Component } from 'react';
import './App.scss';

import MasonryGallery from "./components/masonry_component.js";
import FilterDropdown from "./components/filter_dropdown_component.js";

class App extends Component {
  render() {
    const people = [
      {
        src: "https://assets.time.com/assets/desktop-loop-poster.jpg",
        team: "dev"
      },
      {
        src:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
        team: "ops"
      },
      {
        src:
          "https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_",
        team: "sales"
      }
    ];
    return (
      <div className="App">
        <FilterDropdown />
        <MasonryGallery people={people} />
      </div>
    );
  }
}

export default App;
