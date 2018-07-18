import React, {Component} from "react";
import "./PersonalPage.scss"
import Image from "../Image/Image";

class PersonalPage extends Component {

   constructor(props) {
      super(props);
      this.state = {};
   }

   componentDidMount() {
      fetch('http://localhost:3001/people/' + this.props.match.params.id, {mode: "cors"})
         .then(resp => resp.json())
         .then(response => this.setState({people: response}, () => console.log(this.state)))
   }

   render() {
      return (
         <div className="PersonalPage-container">
            {
               this.state.people &&
               (<div className="PersonalPage-Info">
                  <Image className="PersonalPage-Image" src={this.state.people.image_url1} />
                  <p className="PersonalPage-Title">{this.state.people.title}</p>
                  <p className="PersonalPage-Name">{this.state.people.name}</p>
                  <p className="PersonalPage-biography">{this.state.people.biography}</p>
                  <ul className="PersonalPage-Questions">
                     {
                        this.state.people.questions.map((question, index) => {
                           return (
                              <li key={index}>
                                 <p>Q:- {question.question}?</p>
                                 <p>A:- {question.answer}</p>
                              </li>
                           )
                        })
                     }
                  </ul>
                  <ul className="PersonalPage-SocialMedia">
                     {
                        this.state.people.social_media.map((media, index) => {
                           const mediaName = Object.keys(media)[0];
                           return (
                              <li key={index}>
                                 <Image className="PersonalPage-SocialMediaImg" src={require('./' + mediaName + '.png')} />
                                 <span className="PersonalPage-SocialMediaInfo">{media[mediaName]}</span>
                              </li>
                           )
                        })

                     }
                  </ul>
               </div>
            )}
         </div>
      );
   }

}

export default PersonalPage;
