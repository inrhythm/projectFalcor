import React, {Component} from "react";
import MasonryGallery from "./MasonryComponent.js";
import FilterDropdown from "./FilterDropdownComponent.js";
import "./PeoplePage.scss"

class PeoplePage extends Component {
   constructor() {
      super();
      this.state = {
         people: [],
      };
   }

   setFilter(filterBy) {
      //Here we are just disabling the hover we are not filtering the data.
      const filteredPeople = filterBy === "all"
         ? this.state.people.map(person => {
            person.greyedOut = false;
            return person;
         })
         : this.state.people.map(person => {
            person.greyedOut = !(person.department === filterBy);
            return person;
         });

      this.setState({people: filteredPeople});
   };

   componentDidMount() {
      fetch('http://localhost:3001/people/list')
         .then(resp => resp.json())
         .then(response => this.setState({people: response}))
   }


   render() {
      return (
         <div className="people-page-div">

            <div className="page-title-div">
               <h1>Our People</h1>
               <h3>Take a look at our awesome people</h3>
            </div>

            <FilterDropdown setFilter={this.setFilter.bind(this)}/>
            <MasonryGallery people={this.state.people}/>
         </div>
      );
   }
}

export default PeoplePage;
