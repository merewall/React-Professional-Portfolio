import React from 'react';
import './resume.css';

const {PUBLIC_URL} = process.env;

export default function Resume() {
    
    return (
    <div className="container">
      <div className="page-title">
        <h1>
          <span className="yellow-text">(</span>
          &nbsp;R&#0233;sum&#0233; + Skills&nbsp;
          <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123;</span>
        </h1>
      </div>
      <p id="download-paragraph">  
        <a href={`${PUBLIC_URL}/assets/downloadables/Meredith-Wall-WebDevResume-DB.pdf`} target="_blank" download="MeredithWall_Resume" className="download-resume" rel="noreferrer"><i className="fas fa-download"></i> Download my r&#0233;sum&#0233;</a>
      </p>
      <div className="skills-container">
        <div className="skills-list-div">
          <h3>
            <code>
              <span className="yellow-text">(</span> Front-End <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123; </span>
            </code>
          </h3>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>Bulma</li>
          </ul>
          <h3>
            <code className="yellow-text">
              &#125;
            </code>
          </h3>
        </div>
        <div className="skills-list-div">
          <h3>
            <code>
              <span className="yellow-text">(</span> Back-End <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123; </span>
            </code>
          </h3>
          <ul className="skills-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>Handlebars</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            <li>NodeMailer</li>
          </ul>
          <h3>
            <code className="yellow-text">
              &#125;
            </code>
          </h3>
        </div>
      </div>
      <h1 className="yellow-text bottom-bracket">&#125;</h1>
    </div>
  );
}