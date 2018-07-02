import React, { Component } from "react";

import MasonryGallery from "./masonry_component.js";
import FilterDropdown from "./filter_dropdown_component.js";

class FilterPage extends Component {
	constructor() {
		super();

		this.state = { filterBy: "all" };
	}

	setFilter = filterBy => {
		this.setState({ filterBy });
	};

	render() {
		const people = [
			{
				image1:
					"https://assets.time.com/assets/desktop-loop-poster.jpg",
				image2: "url",
				name: "foo",
				job_title: "bar",
				department: "dev"
			},
			{
				image1:
					"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350",
				image2: "url",
				name: "foo1",
				job_title: "bar1",
				department: "ops"
			},
			{
				image1:
					"https://www.alvinailey.org/sites/default/files/styles/slideshow_image/public/melanie-person.jpg?itok=ocw3xkx_",
				image2: "url",
				name: "foo2",
				job_title: "bar2",
				department: "sales"
			}
		];

		return (
			<div>
				<FilterDropdown setFilter={this.setFilter} />

				{this.state.filterBy === "all" ? (
					<MasonryGallery people={people} />
				) : (
					<MasonryGallery
						people={people.filter(
							person => person.department === this.state.filterBy
						)}
					/>
				)}
			</div>
		);
	}
}

export default FilterPage;
