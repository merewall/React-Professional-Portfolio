import React from "react";
import './project.css'

const {PUBLIC_URL} = process.env

// const styles = {
//     card: {
//         width: "18rem",
//     },
// }

export default function Project({project}) {

    const { title, description, repo, deployed, filepath } = project;

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
                <a href={repo} className="project-link" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <a href={deployed} className="project-link" target="_blank" rel="noreferrer"><i className="fas fa-laptop-code"></i></a>
            </div>
        </div>
    )
}
