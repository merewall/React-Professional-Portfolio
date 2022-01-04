// BRING IN REACT AND USE STATE MODULES
import React, { useState } from 'react';

// CONNECT STYLESHEET
import './form.css'

// HELPER FUNCTION FOR VALIDATING EMAIL
import {validateEmail} from '../../utils/helpers'

// FORM COMPONENT
export default function Form() {
    // STATES FOR EACH FORM INPUT AND SUCCESS/ERROR MESSAGES
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // FUNCTION TO CAPTURE INPUTS AS TYPED OR CATCH EMPTY INPUTS
    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

        // SWITCH CASE FOR CLICKING OUT OF INPUT WITHOUT FILLING OUT
        if (inputValue === "") {
            switch (inputType) {
                case 'firstName':
                    return setErrorMessage('First name is required!');
                case 'lastName':
                    return setErrorMessage('Last name is required!');
                case 'email':
                    return setErrorMessage('Email is required!');
                case 'message':
                    return setErrorMessage('Message is required!');
                default:
                    setErrorMessage('')
            }
        }

        // CAPTURING INPUTS AS ENTERED
        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'email') {
            if(!validateEmail(inputValue)){
                setErrorMessage('Email invalid!')
            } 
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        } 
    };

    // FUNCTION FOR FORM SUBMISSION
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        
        // ERROR MESSAGES FOR EMPTY FIELDS
        if(!email) {
            setErrorMessage('Fill out your email please!')
        } else if(!firstName) {
            setErrorMessage('Fill out your first name please!')
        } else if(!lastName) {
            setErrorMessage('Fill out your last name please!')
        } else if(!message) {
            setErrorMessage('Fill out a message please!')
        } else if(!validateEmail(email)) {
            setErrorMessage('Email invalid!')
        } else {
            setSuccessMessage('Email sent! Thank you for reaching out.')
        }

        // CLEAR FORM INPUTS ON FORM SUBMISSION
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    // CONTACT FORM
    return (
        // FLEX CONTAINER
        <div className="container">

            {/* DYNAMICALLY UPDATED WELCOME GREETING */}
            {/* <p>Hello{firstName? "," : ""} {firstName}{firstName? "!" : ""} <span><img src="https://editablegifs.com/gifs/gifs/raising-hand-emoji/thumbnail.gif" alt="waving smiley" className="smiley"></img></span></p> */}
            <p>Hello,<span><img src="https://editablegifs.com/gifs/gifs/raising-hand-emoji/thumbnail.gif" alt="waving smiley" className="smiley"></img></span> let's stay in touch!</p>
            
            {/* CONTACT FORM */}
            <form className="form">
                {/* <label for="firstName">
                    First Name:
                </label>
                <input
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="text"
                />
                <label for="lastName">
                    Last Name:
                </label>
                <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="text"
                />
                <label for="email">
                    Email:
                </label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="email"
                />
                <label for="message">
                    Message:
                </label>
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    onBlur={handleInputChange}
                    type="textarea"
                    id="message-input"
                /> */}

                {/* ERROR/SUCCESS MESSAGES CONDITIONALLY RENDERED */}
                {/* <div className="alert-message">
                    {errorMessage && (
                        <div>
                        <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    {successMessage && (
                        <div>
                        <p className="error-text">{successMessage}</p>
                        </div>
                    )}
                </div> */}

                {/* FORM SUBMISSION BUTTON */}
                {/* <div className="button-div">
                    <button 
                        onClick={handleFormSubmit}
                        className="btn btn-primary"
                    >
                        Send Email
                    </button>
                </div> */}

                {/* ALTERNATIVE CONTACT LINKS */}
                <div className="contact-links">
                    <a href="mailto:mlwall@alumni.princeton.edu" target="_blank" rel="noreferrer" data-name="mlwall@alumni.princeton.edu"><i className="fas fa-envelope"></i></a>
                    <a href="tel:+15126260968" target="_blank" rel="noreferrer" data-name="512-626-0968"><i className="fas fa-phone"></i></a>
                    <a href="https://github.com/merewall" target="_blank" rel="noreferrer" alt="GitHub profile link" data-name="See how I'm working on GitHub"><i className="fab fa-github" alt="GitHub logo"></i></a>
                    <a href="https://www.linkedin.com/in/meredithwall/" target="_blank" rel="noreferrer" alt="LinkedIn link" data-name="Message me on LinkedIn"><i className="fab fa-linkedin" alt="LinkedIn logo"></i></a>
                    <a href="https://www.instagram.com/merewall" target="_blank" rel="noreferrer"  alt="Instagram profile link" data-name="Check out my Instagram"><i className="fab fa-instagram" alt="Instagram icon"></i></a>
                </div>
                
            </form>
            
        </div>
    )
}