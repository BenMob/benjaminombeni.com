import React, {useState} from "react";
import { Project_i } from "../interfaces/Project.i";
import { MdLink, MdCode } from "react-icons/md";
import Tool from './Tool'

function Project({id, name, description, source, demo, tools, category}: Project_i): JSX.Element {
    
    // eslint-disable-next-line
    const [sourceAvailable, setSourceAvailable] = useState<boolean | undefined>(source != undefined && source != "");
    // eslint-disable-next-line
    const [demoAvailable, setDemoAvailable] = useState<boolean | undefined>(demo != undefined && demo != "");
    
    // Renders the link to the source code of the project.
    const renderSource = (): JSX.Element => {
        return <a href={source}><div className="project-link-icon blank" data-label="Source"><MdCode /></div></a>
    }

    // Renders the link to the demo/live version of the project.
    const renderDemo = (): JSX.Element => {
        return <a href={demo}><div className="project-link-icon" data-label="Live"><MdLink /></div></a>
    }

    // Create Tool components
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
                {sourceAvailable && renderSource()}
                {demoAvailable && renderDemo()}
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