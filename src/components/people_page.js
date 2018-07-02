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
			<div>
				<FilterDropdown setFilter={this.setFilter} />

				{this.state.filterBy === "all" ? (
					<MasonryGallery people={people} />
				) : (
					<MasonryGallery
						people={people.filter(
							person => person.team === this.state.filterBy
						)}
					/>
				)}
			</div>
		);
	}
}

export default FilterPage;
