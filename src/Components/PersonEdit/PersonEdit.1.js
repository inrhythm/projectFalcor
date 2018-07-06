import React, { Component } from 'react';
import './PersonEdit.scss';

class PersonEdit1 extends Component {
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

      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleSubmit(e) {
    e.preventDefault();
    // const { data } = this.form;
    const data = new FormData(e.target); // gets all data submitted
    const name = (data.get(this.name.value))
    console.log(data);
    console.log(data.get('vr--name'));
    console.log("input ref name: ", this.name.value);
    console.log("input ref email: ", this.email.value);


    // this.setState({
    //   [name]: value
    // });

    }

    pushData(){

    }

   render() {
      // const isEnabled = this.canSubmit()

      return (
         <div className="edit-form container">
            {/* <div className="col-12 col-sm-10 push-sm-1 col-md-8 push-md-2"> */}
            <div>
              <div className="edit-form--header"><h2>Add Your Page</h2></div>

                <form onSubmit={this.handleSubmit} 
                  className="vr--form"
                  ref={form => this.form = form}>


                  <div className="edit-form--elem edit-form--upload">
                    <div className="form-image--preview"
                      style={
                         {
                          backgroundImage: 'url(https://st2.depositphotos.com/1637787/11518/i/950/depositphotos_115186378-stock-photo-developer-working-on-laptop.jpg)'
                        }
                      }
                                      
                    ></div>
                    <div className="form--upload__btn">
                      <label className="upload-photo--btn button blue-button" htmlFor="upload-photo">Upload Photo</label>
                      <input id="upload-photo" type="file" />
                    </div>
                  </div>

                    <div className="edit-form--elem form--question">
                        <label><h3>Your Full Name</h3></label>
                        <span>What do you want your colleagues and clients to call you?</span>
                        <input type="text"
                          className="form--question_input" 
                          name="vr--name" 
                          ref={input => this.name = input}
                          required />
                    </div>

                    <div className="edit-form--elem form--question">
                      <label><h3>Your IR Email Address</h3></label>
                      <span>Don't worry, we won't spam you because you work here :)</span>
                        <input type="email"
                          className="form--question_input" 
                          name="vr--emai_id"
                          ref={input => this.email = input}
                          required />
                    </div>

                    <div className="edit-form--elem form--question">
                      <label><h3>Your Title</h3></label>
                      <input type="text" name="vr--title" required />
                    </div>

                  <div className="edit-form--elem form--question">
                    <label><h3>Tagline</h3></label>
                    <span>A short one-liner about you.</span>
                    <input 
                      className="form--question_input" 
                      type="text" 
                      name="vr--tagline" required />
                  </div>

                  <div className="edit-form--elem form--question">
                    <label><h3>Department</h3></label>
                    <select name="department">
                      <option value="">Choose your department</option>
                      <option value="engineering">Engineering</option>
                      <option value="operations">Operations</option>
                      <option value="sales">Sales</option>
                    </select>
                  </div>

                  <div className="edit-form--elem form--question">
                    <label><h3>Biography</h3></label>
                    <span>Super quick bio. Where you went to school, what are you going to work on here, etc</span>
                    <textarea
                      className="form--question_input" />
                  </div>

                <div className="edit-form--elem form--question">
                  <label><h3>Fun Questions</h3></label>
                  <span>Tell us something no one else knows about you.</span>
                  <textarea
                    className="form--question_input" />
                </div>


                  <div className="update-form--container">
                      <input className="button orange-button button-submit" type="submit" value="Submit" />
                      <span className="button button-cancel" onClick={this.handleCancelClick}>Cancel</span>
                  </div>
                </form>

            </div>
         </div>
      )
   }
}

export default PersonEdit1;
