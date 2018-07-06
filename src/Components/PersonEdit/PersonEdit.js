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

         errors: []
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
         this.createValidationError('emailId', 'Please enter a valid InRhythm Email')
         
      } else if(!value.includes('@inrhythm.com')) {
         this.createValidationError('emailId', 'Must be your InRhythm Email Address')
         
      } else {
         this.clearFieldValidationErrors('emailId')
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

         this.createValidationError('name', 'Please enter a your name')
         
      } else {
         this.clearFieldValidationErrors('name')
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
         this.createValidationError('title', 'Please enter a title')
         
      } else {
         this.clearFieldValidationErrors('title')

      }
   }


   handleImageChange(event) {

      let image = this.image.current.files[0]
      
      if(!image) {
         image = null
      }


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

         this.createValidationError('biography', 'Please enter a biography')
         
      } else {
         this.clearFieldValidationErrors('biography')

      }
   }


   handleDepartmentChange(event) {
      const value = event.target.value

      if(!value.length) {

         this.createValidationError('department', 'Please select a department')
         
      } else {
         this.clearFieldValidationErrors('department')
         

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

         this.createValidationError('slack', 'Please enter a Slack username')
         
      } else {
         this.clearFieldValidationErrors('slack')
         
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

         this.createValidationError('linkedin', 'Please enter a LinkedIn URL')
         
      } else if (!value.includes("linkedin.com/")) {
         this.createValidationError('linkedin', 'Must be a valid LinkedIn URL')
         
      } else {
         this.clearFieldValidationErrors('linkedin')
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
         this.createValidationError('question', 'Please enter an answer')
         
      } else {
         this.clearFieldValidationErrors('question')
      }
   }

   canSubmit () {
      const { emailId, name, image, title, department, socialMedia, questions } = this.state.formData;
      let fieldsRules = (
           emailId.length > 13
           && name.length > 0
           && title.length > 0
           && department !== null
           && image !== null
           && socialMedia.linkedin.length > 0
           && socialMedia.slack.length > 0
           && questions[0].answer.length > 0
       );
      
      if (!this.state.errors.length && fieldsRules) {
         return true
      }
      
      return false
   }

   handleSubmit(event) {
      event.preventDefault()
      alert('submitted')
   }

   handleCancelClick(event) {
      event.preventDefault()
      console.log('Form Cancelled')
   }
   
   
   clearFieldValidationErrors(field) {
      let errors = [...this.state.errors]
      
      errors.forEach((error, index) => {
         if(error.field === field) {
            errors.splice(index, 1)
         }
      })
      
      this.setState({errors})
   }
   
   createValidationError(field, message) {
      let errors = [...this.state.errors]
      
      errors.forEach((error, index) => {
         if(error.field === field) {
            errors.splice(index, 1)
         }
      })
      
      errors.push({field: field, message: message})
         
      this.setState({errors})
   }
   
   getValidationError(field) {
      let err;
      this.state.errors.forEach((error, index) => {
         if(error.field === field) {
            err = error.message
         }
      })
      return err
   }

   render() {
      const isEnabled = this.canSubmit()

      return (
         <div className="edit-form container">
            <div className="col-12 col-sm-10 push-sm-1 col-md-8 push-md-2">

                <form className="vr--form">
                    <div>
                        <label>Name: </label>
                        <input type="text" name="vr--name" required />
                    </div>

                    <div>
                      <label>Email: </label>
                      <input type="email" name="vr--emai_id" required />
                    </div>

                    <div>
                      <label>Title: </label>
                      <input type="text" name="vr--title" required />
                    </div>
                </form>

<hr />



               <form onSubmit={this.handleSubmit}>
                  <img src={this.state.image} alt="" />
                  <div>
                     <label>
                        Email:

                        <input type="email" name="email_id" className={(this.getValidationError('emailId') ? 'error' : '')} onChange={this.handleEmailChange} onBlur={this.handleEmailBlur} required />
                     </label>
                     { this.getValidationError('emailId') ? <span>{this.getValidationError('emailId')}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Name:
                        <input type="text" name="name" className={(this.getValidationError('name') ? 'error' : '')} onChange={this.handleNameChange} onBlur={this.handleNameBlur} required/>
                     </label>
                     { this.getValidationError('name') ? <span>{this.getValidationError('name')}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Title:
                        <input type="text" name="title" className={(this.getValidationError('title') ? 'error' : '')} onChange={this.handleTitleChange} onBlur={this.handleTitleBlur} required/>
                     </label>
                     { this.getValidationError('title') ? <span>{this.getValidationError('title')}</span> : '' }
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
                        <textarea name="biography" className={(this.getValidationError('biography') ? 'error' : '')} onChange={this.handleBiographyChange} onBlur={this.handleBiographyBlur} required/>
                     </label>
                     { this.getValidationError('biography') ? <span>{this.getValidationError('biography')}</span> : '' }
                  </div>
                  <div>
                     <label>
                        Department:
                        <select name="department" className={(this.getValidationError('department') ? 'error' : '')} onChange={this.handleDepartmentChange} required>

                           <option value="">Select Department</option>
                           <option value="engineering">Engineering</option>
                           <option value="operations">Operations</option>
                           <option value="sales">Sales</option>
                        </select>
                     </label>
                     { this.getValidationError('department') ? <span>{this.getValidationError('department')}</span> : '' }

                  </div>
                  <div>
                     <label>
                        Slack Username:
                        <input type="text" name="slack" className={(this.getValidationError('slack') ? 'error' : '')} onChange={this.handleSlackChange} onBlur={this.handleSlackBlur} required/>
                     </label>
                     { this.getValidationError('slack') ? <span>{this.getValidationError('slack')}</span> : '' }
                  </div>
                  <div>
                     <label>
                        LinkedIn:
                        <input type="text" name="linkedin" className={(this.getValidationError('linkedin') ? 'error' : '')} onChange={this.handleLinkedinChange} onBlur={this.handleLinkedinBlur} required/>
                     </label>
                     { this.getValidationError('linkedin') ? <span>{this.getValidationError('linkedin')}</span> : '' }
                  </div>
                  <div>
                     <label>
                        GitHub Username:
                        <input type="text" name="github" className={(this.getValidationError('github') ? 'error' : '')} onChange={this.handleGithubChange}/>
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
                        <textarea name="question" className={(this.getValidationError('question') ? 'error' : '')} onChange={this.handleQuestionChange} onBlur={this.handleQuestionBlur} required></textarea>
                     </label>
                     { this.getValidationError('question') ? <span>{this.getValidationError('question')}</span> : '' }
                  </div>
                      <div className="update-form--container">
                     <span className="button orange-button button-cancel" onClick={this.handleCancelClick}>Cancel</span>
                     <input className="button orange-button button-submit" type="submit" value="Submit" disabled={isEnabled  ? false : "disabled"}/>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

export default PersonEdit;
