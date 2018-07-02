import React, { Component } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
	transitionDuration: 1000
};

class Gallery extends React.Component {
	render() {
		const childElements = this.props.people.map(person => (
			<img className="image-element-class" src={person.image1} />
		));

		return (
			<Masonry 
			options={masonryOptions}
			>
				{childElements}
			</Masonry>
		);
	}
}

export default Gallery;
