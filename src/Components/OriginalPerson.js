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
      }
    };

    this.handleEmailBlur = this.handleEmailBlur.bind(this);

    this.handleNameBlur = this.handleNameBlur.bind(this);

    this.handleTitleBlur = this.handleTitleBlur.bind(this);

    this.image = React.createRef();

    this.handleBiographyBlur = this.handleBiographyBlur.bind(this);

    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);

    this.handleSlackBlur = this.handleSlackBlur.bind(this);

    this.handleLinkedinBlur = this.handleLinkedinBlur.bind(this);

    this.handleQuestionBlur = this.handleQuestionBlur.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleEmailBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter a valid InRhythm Email")

    } else if (!value.includes('@inrhythm.com')) {
      el.setCustomValidity("This must be your InRhythm Email Address")

    } else {
      el.setCustomValidity("")
    }
  }

  handleNameBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter your name")

    } else {
      el.setCustomValidity("")
    }
  }

  handleTitleBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter your title")

    } else {
      el.setCustomValidity("")
    }
  }

  handleBiographyBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter a biography")

    } else {
      el.setCustomValidity("")
    }
  }

  handleDepartmentChange(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please select your department")

    } else {
      el.setCustomValidity("")
    }
  }

  handleSlackBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter your Slack username")

    } else {
      el.setCustomValidity("")
    }
  }

  handleLinkedinBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter your LinkedIn URL")


    } else if (!value.includes("linkedin.com/")) {
      el.setCustomValidity("Must be a valid LinkedIn URL")

    } else {
      el.setCustomValidity("")
    }
  }

  handleQuestionBlur(event) {
    const value = event.target.value
    const el = event.target

    if (!value.length) {
      el.setCustomValidity("Please enter a LinkedIn URL")

    } else {
      el.setCustomValidity("")
    }
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      console.log('form not valid')
    }

    console.log('form is valid')
  }

  handleCancelClick(event) {
    event.preventDefault()

    console.log('Form Cancelled')
  }

  render() {
    return (
      <div className="edit-form container">
        <div className="col-12 col-sm-10 push-sm-1 col-md-8 push-md-2">
          <form id="person-form" onSubmit={this.handleSubmit}>
            <img src={this.state.image} alt="" />
            <div>
              <label>
                Email:
                        <input id="email-field" type="email" name="email_id" onBlur={this.handleEmailBlur} required pattern="([a-zA-Z]*@inrhythm\.com)" />
              </label>
            </div>
            <div>
              <label>
                Name:
                        <input id="name-field" type="text" name="name" onBlur={this.handleNameBlur} required pattern="([A-Z][a-zA-Z ]*)" />
              </label>
            </div>
            <div>
              <label>
                Title:
                        <input id="title-field" type="text" name="title" onBlur={this.handleTitleBlur} required pattern="([a-zA-Z ]*)" />
              </label>
            </div>
            <div>
              <label>
                Upload Image:
                        <input type="file" name="image" onChange={this.handleImageChange} ref={this.image} required />
              </label>
            </div>
            <div>
              <label>
                Biography:
                        <textarea id="biography-field" name="biography" onBlur={this.handleBiographyBlur} required />
              </label>
            </div>
            <div>
              <label>
                Department:
                        <select id="department-field" name="department" onChange={this.handleDepartmentChange} required>
                  <option value="">Select Department</option>
                  <option value="engineering">Engineering</option>
                  <option value="operations">Operations</option>
                  <option value="sales">Sales</option>
                </select>
              </label>

            </div>
            <div>
              <label>
                Slack Username:
                        <input id="slack-field" type="text" name="slack" onBlur={this.handleSlackBlur} required pattern="([a-zA-Z ]*)" />
              </label>
            </div>
            <div>
              <label>
                LinkedIn:
                        <input id="linkedin-field" type="text" name="linkedin" onBlur={this.handleLinkedinBlur} required pattern="linkedin.com/([-a-zA-Z0-9@:%_\+.~#?&//=]*)" />
              </label>
            </div>
            <div>
              <label>
                GitHub Username:
                        <input id="github-field" type="text" name="github" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9\-]*[a-zA-Z0-9]+$" />
              </label>
            </div>
            <div>
              <label>
                Website:
                        <input type="text" name="website" pattern="([A-Za-z]*)\.([A-Za-z\.]*)" />
              </label>
            </div>
            <div>
              <label>
                <span>{this.state.formData.questions[0].question}</span>
                <textarea name="question" onBlur={this.handleQuestionBlur} required></textarea>
              </label>
            </div>
            <div>
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