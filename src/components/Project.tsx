import React from "react";
import { Project_i } from "../interfaces/Project.i";
import { MdLink, MdCode } from "react-icons/md";

function Project({id, name, description, source, demo, tools, category}: Project_i): JSX.Element {

    return(
        <div className="project-container">
            <div className="project-header">
                 <h3>{name}</h3>
            </div>
            <div className="project-description">
                <small>{description}</small>
            </div>
            <div className="project-links">
                <div className="project-link-icon"><a href={source}><MdCode /></a></div>
                <div className="project-link-icon"><a href={source}><MdLink /></a></div>
            </div>
            <div className="project-tools">
                <small>Java</small>
                <small>Javascript</small>
                <small>HTML</small>
                <small>Bootstrap</small>
            </div>
            <div className="category">
                <small>Category: {category}</small>
            </div>
        </div>
    )
}

export default Project;