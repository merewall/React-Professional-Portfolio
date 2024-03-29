// BRING IN REACT MODULE AND STYLESHEET
import React from 'react';
import './about.css'

// FOR PUBLIC STATIC HREFS
const {PUBLIC_URL} = process.env;

// ABOUT COMPONENT
export default function About() {
  return (
    // PAGE CONTENT CONTAINER
    <div className="container">

      {/* PAGE TITLE */}
      <div className="page-title">
        <h1><span className="yellow-text">(</span>&nbsp;About Me&nbsp;<span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text">&#123;</span></h1>
      </div>

      {/* FLEX CONTAINER FOR BIO AND HEADSHOT */}
      <div className="about-me-container">
        
        {/* HEADSHOT */}
        <div className="headshot">
          <img src={`${PUBLIC_URL}/assets/images/about-me-headshot.png`} className="about-me-image" alt="Meredith Wall headshot"></img>
        </div>

        {/* BIO SECTION */}
        <div id="about-me-detail">
          <p>Hi, there! <span><img src="https://editablegifs.com/gifs/gifs/raising-hand-emoji/thumbnail.gif" alt="waving smiley" className="smiley"></img></span></p>
          <p>I'm a scientific-creative with a Full-Stack Web Development Certificate from Georgia Tech! I have extensive management <a id="resume-href" className="waves-effect" href="%PUBLIC_URL%/assets/downloadables/Meredith-Wall-WebDevResume-DB.pdf" target="_blank" download="MeredithWall_Resume">experience</a> as an environmental geologist and marketer.</p>
          <p>I have a passion for creating clean, polished UI designs using HTML, CSS, & JavaScript, keeping user functionality in mind.</p>
          <p>I grew up in Austin, Texas, am a registered member of the Cherokee nation, and am renovating a home in Atlanta, Georgia.</p>
          <p>When I'm not coding, I love exploring the national parks, traveling, and hanging out with my best friends:<br></br> Fitz <span><i className="fas fa-cat"></i></span>, Tink <span><i className="fas fa-dog"></i></span>, and Cali <span><i className="fas fa-cat"></i></span>!</p>
        </div>

      </div>
      
      {/* SECTION FOR INTERESTS PICTURES */}
      <div id="interest-div">
          <div className="interest-item">
            <img src={`${PUBLIC_URL}/assets/images/outdoors.jpg`} className="about-me-image" alt="girl smiling in front of rock outcrop"></img>
            <span className="hide">HIKING</span>
          </div>
          <div className="interest-item">
            <img src={`${PUBLIC_URL}/assets/images/fitz.jpg`} className="about-me-image" alt="orange tabby cat"></img>
            <span className="hide">FITZ</span>
          </div>
          <div className="interest-item">
            <img src={`${PUBLIC_URL}/assets/images/tink.jpg`} className="about-me-image" alt="red merle Australian shepherd"></img>
            <span className="hide">TINK</span>
          </div>
          <div className="interest-item">
            <img src={`${PUBLIC_URL}/assets/images/cali.jpg`} className="about-me-image" alt="calico cat"></img>
            <span className="hide">CALI</span>
          </div>
      </div>

      {/* PAGE CLOSING BRACKET */}
      <div className="closing-bracket">
        <h1 className="yellow-text bottom-bracket">&#125;</h1>
      </div>
      
    </div>
  );
}