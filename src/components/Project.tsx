import React from "react";
import { Project_i } from "../interfaces/Project.i";
import { MdLink, MdCode } from "react-icons/md";
import Tool from './Tool'

function Project({id, name, description, source, demo, tools, category}: Project_i): JSX.Element {

    const tools_used = tools?.map(tool => {
        return <Tool name={tool.name} color={tool.color}/>
    })

    return(
        <div className="project-container">
            <div className="project-header">
                 <h3>{name}</h3>
            </div>
            <div className="project-description">
                <small>{description}</small>
            </div>
            <div className="project-links">
                <a href={source}><div className="project-link-icon" data-label="Source"><MdCode /></div></a>
                <a href={source}><div className="project-link-icon" data-label="Live"><MdLink /></div></a>
            </div>
            <div className="project-tools wrap">
               {tools_used}
            </div>
            <div className="category">
                <small>{category} Project</small>
            </div>
        </div>
    )
}

export default Project;