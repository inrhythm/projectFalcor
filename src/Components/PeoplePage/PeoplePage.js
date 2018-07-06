import React, { Component } from "react";

import MasonryGallery from "./MasonryComponent.js";
import FilterDropdown from "./FilterDropdownComponent.js";

import "./PeoplePage.scss"

class FilterPage extends Component {
	constructor() {
		super();
		this.state = { filterBy: "all" };
	}

	setFilter = filterBy => {
		this.setState({ filterBy });
	};

	render() {
		// Pretend this is from an ajax request or something
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

		const filteredPeople =
			this.state.filterBy === "all"
				? people.map(person => {
						person.greyedOut = false;
						return person;
				  })
				: people.map(person => {
						person.greyedOut = !(person.department === this.state.filterBy);
						return person;
				  });

		return (
			<div className="people-page-div">
				<div className="page-title-div">Our People</div>
				<FilterDropdown setFilter={this.setFilter} />
            <MasonryGallery people={people}/>
			</div>
		);
	}
}

export default FilterPage;
