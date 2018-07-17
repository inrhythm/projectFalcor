import React, {Component} from "react";
import Image from './ImageComponent.js';
import {Link} from 'react-router-dom'

class Gallery extends Component {
   render() {
      const childElements = this.props.people.map((person, index) => {

         return (
            <div key={index}
                 className={"person-container " + (!person.greyedOut ? "brought-to-front" : "sent-to-rear") + " col-md-4 col-lg-3 col-xl-2"}>
               <Link to={`/person/${person.id}`} className="person">
                  <div className="image-container">
                     <Image
                        className={"main-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")}
                        src={person.image_url1}/>
                     <Image
                        className={"hover-img image-element-class " + (person.greyedOut ? " greyed-out" : "not-greyed-out")}
                        src={person.image_url2}/>
                  </div>
                  <div className="person-name">{person.name}</div>
                  <div className="person-name">{person.title}</div>
               </Link>
            </div>
         )
      });

      return (
         <div className="people-grid"> {childElements} </div>
      );
   }
}

export default Gallery;
