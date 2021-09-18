import React from 'react';
import logo from '../../assets/images/favicon.png'
import './navigation.css'

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bg">
      <a className="navbar-brand" href="#a"><img src={logo} alt="Meredith Wall logo" className="logo"></img></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={props.currentPage === 'About' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link" id="about-link" href="#about" onClick={() => props.setCurrentPage('About')}>About Me</a>
          </li>
          <li className={props.currentPage === 'Portfolio' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link" id="portfolio-link" href="#portfolio" onClick={() => props.setCurrentPage('Portfolio')}>Portfolio</a>
          </li>
          <li className={props.currentPage === 'Contact' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link"  id="contact-link" href="#contact" onClick={() => props.setCurrentPage('Contact')}>Contact</a>
          </li>
          <li className={props.currentPage === 'Resume' ? `nav-item active-page` : `nav-item`}>
            <a className="nav-link"  id="resume-link" href="#resume" onClick={() => props.setCurrentPage('Resume')}>Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation