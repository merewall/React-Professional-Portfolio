// BRING IN REACT MODULE
import React from 'react';

// CONNECT FORM COMPONENT AND STYLESHEET
import Form from '../Form/Form';
import './contact.css'

// CONTACT COMPONENT
export default function Contact() {
  return (
    // PAGE CONTENT CONTAINER
    <div className="container">

      {/* PAGE TITLE */}
      <div className="page-title">
        <h1>
          <span className="yellow-text">(</span>
          &nbsp;Contact&nbsp;
          <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123;</span>
        </h1>
      </div>
      <div className="form-flex-container">
        {/* FORM COMPONENT IMPORT */}
        <Form />
      </div>
      

      {/* CLOSING BRACKET FOR PAGE */}
      <h1 className="yellow-text bottom-bracket">&#125;</h1>
    </div>
  );
}