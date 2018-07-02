import React, { Component } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
	transitionDuration: 0
};

class Gallery extends React.Component {
	render() {
		const childElements = this.props.people.map(person => (
			<img className="image-element-class" src={person.src} />
		));

		return <Masonry>{childElements}</Masonry>;
	}
}

export default Gallery;
