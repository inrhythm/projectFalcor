import React, { Component } from "react";
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

	setFilter(filterBy){
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

	componentDidMount(){

      // Pretend this is from an ajax request or something to get people
      const people = [
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo",
            job_title: "bar",
            department: "dev"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo1",
            job_title: "bar1",
            department: "ops"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo2",
            job_title: "bar2",
            department: "sales"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo",
            job_title: "bar",
            department: "dev"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo1",
            job_title: "bar1",
            department: "ops"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo2",
            job_title: "bar2",
            department: "sales"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo",
            job_title: "bar",
            department: "dev"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo1",
            job_title: "bar1",
            department: "ops"
         },
         {
            image1:
               "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            image2: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
            name: "foo2",
            job_title: "bar2",
            department: "sales"
         }
      ];

      this.setState({ people });
   }



	render() {
		return (
			<div className="people-page-div">

				<div className="page-title-div">
               <h1>Our People</h1>
               <h3>Take a look at our awesome people</h3>
            </div>

				<FilterDropdown setFilter={this.setFilter.bind(this)} />
            <MasonryGallery people={this.state.people}/>
			</div>
		);
	}
}

export default PeoplePage;
