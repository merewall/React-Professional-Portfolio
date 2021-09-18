// BRING IN REACT MODULE AND STYLESHEET
import React from "react";
import './project.css'

// FOR STATIC PUBLIC DIRECTORY HREFS
const {PUBLIC_URL} = process.env

// PROJECT COMPONENT
export default function Project({project}) {
    // DESTRUCTOR INCOMING PROJECT PROP
    const { title, description, repo, deployed, filepath } = project;

    // CARD FOR EACH PROJECT W/ IMAGE, TITLE, DESCRIPTION, AND LINKS
    return (
        <div className="card">
            <img
                className="card-img-top"
                src={PUBLIC_URL + filepath}
                alt={`Logo for ${title}`}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={repo} className="project-link" target="_blank" rel="noreferrer" ><i alt="Link to GitHub Repo" className="fab fa-github"></i></a>
                <a href={deployed} className="project-link" target="_blank" rel="noreferrer"><i  alt="Link to Deployed App" className="fas fa-laptop-code"></i></a>
            </div>
        </div>
    )
}
