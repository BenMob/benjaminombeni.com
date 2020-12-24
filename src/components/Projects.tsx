import React from "react"
import projects from "../data/Projects"
import Project from "./Project"

function Projects(): JSX.Element {
    const project_list = projects.map(project => {
        return(
            <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                source={project.source}
                demo={project.demo}
                category={project.category}
                tools={project.tools}
            />
        ) 
    })

    return (
        <div className="projects-wrapper">
            <div className="flex-center-width"><h2>Projects</h2></div>
            <div className="project-list">{project_list}</div>
        </div>
    )
}

export default Projects;
