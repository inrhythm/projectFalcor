import React, { Component } from "react";

import Image from './ImageComponent.js';

class Gallery extends React.Component {
	render() {
		const childElements = this.props.people.map(person => (
			 <div className={"person-container "+ (!person.greyedOut ? "brought-to-front" : "sent-to-rear")+"col-md-4 col-lg-3 col-xl-2"}>
				<a className="person" href="#">
					<div className="image-container">
						<Image className={"main-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")} src={person.image1} />
						<Image className={"hover-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")} src={person.image2} />
					</div>
					<div className="person-name">{`${person.name} ${person.department}`}</div>
				</a>
			</div>
		));

		return (
			<div className="people-grid"> {childElements} </div>
		);
	}
}

export default Gallery;
