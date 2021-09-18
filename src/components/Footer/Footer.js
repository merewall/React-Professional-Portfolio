// BRING IN REACT MODULE AND STYLESHEET
import React from 'react';
import './footer.css'

// FOOTER COMPONENT
export default function Footer() {
  return (
    <footer className="flex-row px-1">
      <a href="https://github.com/merewall" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/meredithwall/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/merewall" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a>      
    </footer>
  );
}