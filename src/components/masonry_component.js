import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
 
const masonryOptions = {
    transitionDuration: 0
};


class Gallery extends React.Component {
    render() {
        /*const childElements = this.props.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element.src} />
                </li>
            );
        });*/
    
        return (
            <Masonry>
            	
            </Masonry>
        );
    }
}
 
export default Gallery;