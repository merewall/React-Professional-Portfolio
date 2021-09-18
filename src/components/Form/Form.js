import React, { useState } from 'react';
import './form.css'

// NEED TO BUILD HELPER FUNCTIONS FOR VALIDATING
import {validateEmail} from '../../utils/helpers'

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (event) => {
        let target = event.target;
        let inputType = target.name;
        let inputValue = target.value;

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        
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

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container">
            <p>Hello{firstName? "," : ""} {firstName}{firstName? "!" : ""} <span><img src="https://editablegifs.com/gifs/gifs/raising-hand-emoji/thumbnail.gif" alt="waving smiley" className="smiley"></img></span></p>
            <form className="form">
                <label for="firstName">
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
                />
                <div className="alert-message">
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
                </div>
                <div className="button-div">
                    <button 
                        onClick={handleFormSubmit}
                        className="btn btn-primary"
                    >
                        Send Email
                    </button>
                </div>
                <div className="contact-links">
                    <a href="mailto:mlwall@alumni.princeton.edu" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                    <a href="tel:+15126260968" target="_blank" rel="noreferrer"><i className="fas fa-phone"></i></a>
                </div>
                
            </form>
            
            </div>
    )
}