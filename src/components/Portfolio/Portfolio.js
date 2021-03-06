// BRING IN REACT AND USESTATE MODULES
import React, {useState} from 'react';

// CONNECT PROJECT COMPONENT AND STYLESHEET
import Project from '../Project/Project';
import './portfolio.css'

// PORTFOLIO COMPONENT
export default function Portfolio() {
    
    // PROJECT DATA AS A STATE
    const [projects] = useState([
      {
        title: 'Tech*nicality Blog',
        description: 'a tech blog',
        repo: "https://github.com/merewall/Tech-Blog",
        deployed: "https://tech-blog-mw.herokuapp.com/",
        filepath: "/assets/images/tech-blog.png"
      },
      {
        title: 'Toolin\' Around',
        description: 'a tool-sharing app',
        repo: "https://github.com/merewall/Toolin-Around",
        deployed: "https://toolin-around.herokuapp.com/",
        filepath: "/assets/images/toolin-around.png"
      },
      {
        title: 'Note Taker',
        description: 'a note taking app',
        repo: "https://github.com/merewall/Note-Taker",
        deployed: "https://note-taker-mwall.herokuapp.com/",
        filepath: "/assets/images/note-taker.png"
      },
      {
        title: 'Meet The Team',
        description: 'team profile generator',
        repo: "https://github.com/merewall/Team-Profile-Generator",
        deployed: "https://merewall.github.io/Team-Profile-Generator/",
        filepath: "/assets/images/team-profile.png"
      },
      {
        title: 'Weather Dashboard',
        description: 'a weather-search app',
        repo: "https://github.com/merewall/Wk6-WeatherDashboard",
        deployed: "https://merewall.github.io/Wk6-WeatherDashboard/",
        filepath: "/assets/images/weather-dashboard.jpg"
      },
      // {
      //   title: 'Get H.API',
      //   description: 'a little pick-me-up',
      //   repo: "https://github.com/merewall/Project-1-getHAPI",
      //   deployed: "https://merewall.github.io/Project-1-getHAPI/",
      //   filepath: "/assets/images/getHAPI.png"
      // },
      {
        title: 'Nommy',
        description: 'restaurant inspiration',
        repo: "https://github.com/merewall/nommy",
        deployed: "https://nommy-restaurants.herokuapp.com/",
        filepath: "/assets/images/nommy.png"
      }
    ])

    // PORTFOLIO PAGE
    return (
      // FLEX CONTAINER FOR PAGE
      <div className="container">

        {/* PAGE TITLE */}
        <div className="page-title">
          <h1><span className="yellow-text">(</span> Portfolio <span className="yellow-text">)</span><span className="blue-text"> => </span><span className="yellow-text"> &#123;</span></h1>
        </div>
        
        {/* CONTAINER FOR EACH PROJECT */}
        <div className="card-container">
          {projects.map((project, index) => {
            return (
              <Project 
                project={project}
                key={index}
              />
            )
          })}
        </div>

        {/* CLOSING PAGE BRACKET */}
        <h1 className="yellow-text bottom-bracket">&#125;</h1>
      </div>
  );
}