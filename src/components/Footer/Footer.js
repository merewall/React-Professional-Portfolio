// BRING IN REACT MODULE AND STYLESHEET
import React from 'react';
import './footer.css'

// FOOTER COMPONENT
export default function Footer() {
  return (
    <footer className="flex-row px-1">
      <a href="https://github.com/merewall" target="_blank" rel="noreferrer" alt="GitHub profile link"><i className="fab fa-github" alt="GitHub logo"></i></a>
      <a href="https://www.linkedin.com/in/meredithwall/" target="_blank" rel="noreferrer" alt="LinkedIn link"><i className="fab fa-linkedin" alt="LinkedIn logo"></i></a>
      <a href="https://www.instagram.com/merewall" target="_blank" rel="noreferrer"  alt="Instagram profile link"><i className="fab fa-instagram" alt="Instagram icon"></i></a>      
    </footer>
  );
}