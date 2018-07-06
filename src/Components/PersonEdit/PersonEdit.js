import React, { Component } from 'react';
import './PersonEdit.scss';

class PersonEdit extends Component {
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
            el.setCustomValidity("Please answer the question")

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
        // const isEnabled = this.canSubmit()
        let uploadedPreview = '';

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
                                        // the preview for the uploaded image should come here
                                        backgroundImage: `url(${uploadedPreview})`
                                        // backgroundImage: 'url(https://st2.depositphotos.com/1637787/11518/i/950/depositphotos_115186378-stock-photo-developer-working-on-laptop.jpg)'
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
                                required
                                id="name-field"
                                name="name"
                                onBlur={this.handleNameBlur}
                                pattern="([A-Z][a-zA-Z ]*)" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Your IR Email Address</h3></label>
                            <span>Don't worry, we won't spam you because you work here :)</span>
                            <input type="email"
                                className="form--question_input"
                                id="email-field"
                                name="email_id"
                                onBlur={this.handleEmailBlur}
                                pattern="([a-zA-Z]*@inrhythm\.com)"
                                required />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Your Title</h3></label>
                            <input type="text"
                                id="title-field"
                                name="title"
                                onBlur={this.handleTitleBlur}
                                required
                                pattern="([a-zA-Z ]*)" />
                        </div>

                        {/* <div className="edit-form--elem form--question">
                    <label><h3>Tagline</h3></label>
                    <span>A short one-liner about you.</span>
                    <input 
                      className="form--question_input" 
                      type="text" 
                      name="tagline" required />
                  </div> */}

                        <div className="edit-form--elem form--question">
                            <label><h3>Department</h3></label>
                            <select id="department-field"
                                name="department"
                                onChange={this.handleDepartmentChange}
                                required >
                                <option value="">Choose your department</option>
                                <option value="engineering">Engineering</option>
                                <option value="operations">Operations</option>
                                <option value="sales">Sales</option>
                            </select>
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Slack Username</h3></label>
                            <input id="slack-field" type="text" name="slack" onBlur={this.handleSlackBlur} required pattern="([a-zA-Z ]*)" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>LinkedIn</h3></label>
                            <input id="linkedin-field" type="text" name="linkedin" onBlur={this.handleLinkedinBlur} required pattern="linkedin.com/([-a-zA-Z0-9@:%_\+.~#?&//=]*)" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>GitHub</h3></label>
                            <input id="github-field" type="text" name="github" pattern="^[a-zA-Z0-9]+[a-zA-Z0-9\-]*[a-zA-Z0-9]+$" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Website</h3></label>
                            <input type="text" name="website" pattern="([A-Za-z]*)\.([A-Za-z\.]*)" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Biography</h3></label>
                            <span>Super quick bio. Where you went to school, what are you going to work on here, etc</span>
                            <textarea
                                className="form--question_input" />
                        </div>

                        <div className="edit-form--elem form--question">
                            <label><h3>Fun Questions</h3></label>
                            <span>{this.state.formData.questions[0].question}</span>
                            <textarea
                                className="form--question_input"
                                name="question" onBlur={this.handleQuestionBlur} required
                            />
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

export default PersonEdit;
