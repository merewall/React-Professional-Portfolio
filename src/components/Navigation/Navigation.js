// IMPORT REACT MODULE
import React from 'react';

// CONNECT LOGO AND STYLESHEET
import logo from '../../assets/images/favicon.png'
import './navigation.css'

// NAVIGATION COMPONENT
export default function Navigation(props) {
  return (
    // NAVBAR CONTAINER
    <nav className="navbar navbar-expand-lg navbar-light nav-bg">

      {/* "BRAND" LOGO */}
      <a className="navbar-brand" href="#home"  onClick={() => props.setCurrentPage('About')}><img src={logo} alt="Meredith Wall logo" className="logo"></img></a>

      {/* CONDITIONALLY RENDERED BUTTON FOR COLLAPSED NAVBAR */}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* CONDITIONALLY COLLAPSIBLE NAVBAR LINKS */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          {/* ABOUT ME */}
          <li className={props.currentPage === 'About' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link" id="about-link" href="#about" onClick={() => props.setCurrentPage('About')}>About Me</a>
          </li>

          {/* PORTFOLIO */}
          <li className={props.currentPage === 'Portfolio' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link" id="portfolio-link" href="#portfolio" onClick={() => props.setCurrentPage('Portfolio')}>Portfolio</a>
          </li>

          {/* CONTACT */}
          <li className={props.currentPage === 'Contact' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link"  id="contact-link" href="#contact" onClick={() => props.setCurrentPage('Contact')}>Contact</a>
          </li>

          {/* RESUME */}
          <li className={props.currentPage === 'Resume' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link"  id="resume-link" href="#resume" onClick={() => props.setCurrentPage('Resume')}>Resume</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}