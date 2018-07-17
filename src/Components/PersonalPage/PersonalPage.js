import React, {Component} from "react";
import "../PeoplePage/PeoplePage.scss"

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
         <div>
            {
               this.state.people &&

               (<div>
                  <div className="">
                     <img src={this.state.people.image_url1} alt=""/>
                  </div>
                  <div>
                     <span>Name:</span>
                     <span>{this.state.people.name}</span>
                  </div>
                  <div>
                     <span>Title:</span>
                     <span>{this.state.people.title}</span>
                  </div>
                  <div>
                     <span>Biography:</span>
                     <span>{this.state.people.biography}</span>
                  </div>
                  <div>
                     <span>Department:</span>
                     <span>{this.state.people.department}</span>
                  </div>
                  <ul>
                     {
                        this.state.people.social_media.map((media, index) => {
                           const mediaName = Object.keys(media)[0];
                           return (
                              <li key={index}>
                                 <span>{mediaName}</span>
                                 <span>{media[mediaName]}</span>
                              </li>
                           )
                        })

                     }
                  </ul>
                  <ul>
                     {
                        this.state.people.questions.map((question, index) => {
                           return (
                              <li key={index}>
                                 <span>{question.question}</span>
                                 <span>{question.answer}</span>
                              </li>
                           )
                        })
                     }
                  </ul>
               </div>)
            }
         </div>


      );
   }

}

export default PersonalPage;
