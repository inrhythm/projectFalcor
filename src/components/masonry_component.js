import React, { Component } from "react";

import Image from './image-component.js';

class Gallery extends React.Component {
	render() {
		const childElements = this.props.people.map(person => (
			<div className={"image-container "+ (!person.greyedOut ? "brought-to-front" : "sent-to-rear")+" col-sm-2 col-lg-4"}>
				<a className="person" href="#">
					<div className="image-container">
						<Image className={"main-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")} src={person.image1} />
						<Image className={"hover-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")} src={person.image2} />
					</div>
					<div className="person-name">{person.name}</div>
				</a>
			</div>
		));

		return (
			<div className="people-grid container"> {childElements} </div>
		);
	}
}

export default Gallery;
