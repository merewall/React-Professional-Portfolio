import React from 'react';
import Form from '../Form/Form';
import './contact.css'

export default function Contact() {
  return (
    <div className="container">
      <div className="page-title">
        <h1>
          <span className="yellow-text">(</span>
          &nbsp;Contact&nbsp;
          <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123;</span>
        </h1>
      </div>
      <Form />
      <h1 className="yellow-text bottom-bracket">&#125;</h1>
    </div>
  );
}