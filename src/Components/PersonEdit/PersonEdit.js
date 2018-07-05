import React from 'react';
import './PersonEdit.scss';

class PersonEdit extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {
            emailId: '',
            name: '',
            title: '',
            image: null,
            biography: '',
            department: null,
            socialMedia: {
               slack: '',
               linkedin: '',
               github: '',
               website: ''
            },
            questions: [
               {
                  question: "Tell us something no one knows about you",
                  answer: ''
               }
            ],
            isActive: true,
            isValid: false
         },

         errors: {}
      };

      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleEmailBlur = this.handleEmailBlur.bind(this);

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleNameBlur = this.handleNameBlur.bind(this);

      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleTitleBlur = this.handleTitleBlur.bind(this);

      this.handleImageChange = this.handleImageChange.bind(this);

      this.handleBiographyChange = this.handleBiographyChange.bind(this);
      this.handleBiographyBlur = this.handleBiographyBlur.bind(this);

      this.handleDepartmentChange = this.handleDepartmentChange.bind(this);

      this.handleSlackChange = this.handleSlackChange.bind(this);
      this.handleSlackBlur = this.handleSlackBlur.bind(this);

      this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
      this.handleLinkedinBlur = this.handleLinkedinBlur.bind(this);

      this.handleGithubChange = this.handleGithubChange.bind(this);

      this.handleWebsiteChange = this.handleWebsiteChange.bind(this);

      this.handleQuestionChange = this.handleQuestionChange.bind(this);
      this.handleQuestionBlur = this.handleQuestionBlur.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancelClick = this.handleCancelClick.bind(this);
      this.image = React.createRef();
   }

   handleEmailChange(event) {

      const value = event.target.value

      this.setState(state => {
         state.formData.emailId = value
         return state
      })
   }
   handleEmailBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.emailId = "Please enter a valid InRhythm Email"
            return state
         })
      } else if(!value.includes('@inrhythm.com')) {
         this.setState(state => {
            state.errors.emailId = "Must be your InRhythm Email Address"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.emailId = null
            return state
         })
      }
   }


   handleNameChange(event) {

      const value = event.target.value

      this.setState(state => {
         state.formData.name = value
         return state
      })
   }
   handleNameBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.name = "Please enter a your name"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.name = null
            return state
         })
      }
   }


   handleTitleChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.title = value
         return state
      })
   }
   handleTitleBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.title = "Please enter a title"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.title = null
            return state
         })
      }
   }


   handleImageChange(event) {
      const image = this.image.current.files[0]

      this.setState(state => {
         state.formData.image = image
         return state
      })
   }


   handleBiographyChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.biography = value
         return state
      })
   }
   handleBiographyBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.biography = "Please enter a biography"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.biography = null
            return state
         })
      }
   }


   handleDepartmentChange(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.department = "Please select a department"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.department = null
            return state
         })
      }

      this.setState(state => {
         state.formData.department = value
         return state
      })
   }


   handleSlackChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.socialMedia.slack = value
         return state
      })
   }
   handleSlackBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.slack = "Please enter a Slack username"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.slack = null
            return state
         })
      }
   }

   handleLinkedinChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.socialMedia.linkedin = value
         return state
      })
   }
   handleLinkedinBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.linkedin = "Please enter a LinkedIn URL"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.linkedin = null
            return state
         })
      }
   }


   handleGithubChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.socialMedia.github = value
         return state
      })
   }


   handleWebsiteChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.socialMedia.website = value
         return state
      })
   }


   handleQuestionChange(event) {
      const value = event.target.value

      this.setState(state => {
         state.formData.questions[0].answer = value
         return state
      })
   }
   handleQuestionBlur(event) {
      const value = event.target.value

      if(!value.length) {
         this.setState(state => {
            state.errors.question = "Please enter an answer"
            return state
         })
      } else {
         this.setState(state => {
            state.errors.question = null
            return state
         })
      }
   }

   // canSubmit () {

   //     for(var data in this.state.errors) {
   //         if(data !== null) {
   //             return false
   //         }

   //         return true
   //     }

   // this.state.errors.forEach((data, index) => {
   //     if (data) {
   //         return false;
   //     }
   // })
   // return (

   // )
   // }

   // check if the data can be submitted -- validating data
   // canSubmit () {
   //     const { emailId, name, title, department, socialMedia } = this.state.formData;
   //     return (
   //         emailId.length > 13
   //         && emailId.includes("@inrhythm.com")
   //         && name.length > 0
   //         && title.length > 0
   //         && department !== null
   //         && socialMedia.linkedin.length > 0
   //         && socialMedia.linkedin.includes("linkedin.com/")
   //         && socialMedia.slack.length > 0
   //     );
   // }

   handleSubmit(event) {
      // if(!this.canSubmit()){
      event.preventDefault();
      // return
      // }
      // console.log('Form Submitted')
   }

   handleCancelClick(event) {
      event.preventDefault();
      console.log('Form Cancelled')
   }

   render() {
      // const isEnabled = this.canSubmit();
      // console.log(this.canSubmit())

      return (
         <div className="edit-form container">
            <div className="col-12 col-sm-10 push-sm-1 col-md-8 push-md-2">
               <form onSubmit={this.handleSubmit}>
                  <img src={this.state.image} alt="" />
                  <div>
                     <label>
                        Email:
                        <input type="email" name="email_id" onChange={this.handleEmailChange} onBlur={this.handleEmailBlur} required />
                     </label>
                     { this.state.errors.emailId ? <span>{this.state.errors.emailId}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleNameChange} onBlur={this.handleNameBlur} required/>
                     </label>
                     { this.state.errors.name ? <span>{this.state.errors.name}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Title:
                        <input type="text" name="title" onChange={this.handleTitleChange} onBlur={this.handleTitleBlur} required/>
                     </label>
                     { this.state.errors.title ? <span>{this.state.errors.title}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Upload Image:
                        <input type="file" name="image" onChange={this.handleImageChange} ref={this.image} required/>
                     </label>
                  </div>
                  <div>
                     <label>
                        Biography:
                        <textarea name="biography" onChange={this.handleBiographyChange} onBlur={this.handleBiographyBlur} required/>
                     </label>
                     { this.state.errors.biography ? <span>{this.state.errors.biography}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Department:
                        <select name="department" onChange={this.handleDepartmentChange} required>
                           <option value="">Select Department</option>
                           <option value="engineering">Engineering</option>
                           <option value="operations">Operations</option>
                           <option value="sales">Sales</option>
                        </select>
                     </label>
                     { this.state.errors.department ? <span>{this.state.errors.department}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Slack Username:
                        <input type="text" name="slack" onChange={this.handleSlackChange} onBlur={this.handleSlackBlur} required/>
                     </label>
                     { this.state.errors.slack ? <span>{this.state.errors.slack}</span> : '' }
                  </div>
                  <div>
                     <label>
                        LinkedIn:
                        <input type="text" name="linkedin" onChange={this.handleLinkedinChange} onBlur={this.handleLinkedinBlur} required/>
                     </label>
                     { this.state.errors.linkedin ? <span>{this.state.errors.linkedin}</span> : '' }
                  </div>
                  <div>
                     <label>
                        GitHub Username:
                        <input type="text" name="github" onChange={this.handleGithubChange}/>
                     </label>
                  </div>
                  <div>
                     <label>
                        Website:
                        <input type="text" name="website" onChange={this.handleWebsiteChange}/>
                     </label>
                  </div>
                  <div>
                     <label>
                        <span>{this.state.formData.questions[0].question}</span>
                        <textarea className="form-response response-long" name="question" onChange={this.handleQuestionChange} onBlur={this.handleQuestionBlur} required></textarea>
                     </label>
                     { this.state.errors.question ? <span>{this.state.errors.question}</span> : '' }
                  </div>
                  <div className="update-form--container">
                     <span className="button orange-button button-cancel" onClick={this.handleCancelClick}>Cancel</span>
                     <input className="button orange-button button-submit" type="submit" value="Submit" />
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

export default PersonEdit;
