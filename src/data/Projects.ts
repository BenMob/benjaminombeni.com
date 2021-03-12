import { Project_i } from '../interfaces/Project.i'
import { mips_converter_tools, csusm_dsc_website_tools, trace_c19_tools } from "./Projects_tools"

enum categories {
    PERSONAL = "Personal",
    TEAM = "Team"
}

const projects : Array<Project_i> = [
    {
        id: 1,
        name:"Mips-Converter",
        description: "A web application that converts simple Mips Assembly instructions into machine code. I made this tool to help me in my Assembly Language and Digital Circuit course at University. A number of other students ended up using it as well.",
        source: "https://github.com/BenMob/Mips_Converter",
        demo: "https://mips-converter.herokuapp.com/",
        tools: mips_converter_tools,
        category: categories.PERSONAL
    },
    {
        id: 2,
        name:"DSC-CSUSM Website",
        description: "The official website of the Developper Student Clubs at CSUSM. I made this website while serving as Development Lead for the Club.",
        source: "https://github.com/BenMob/csusm-dsc-website",
        demo: "https://dsc2020-290203.wl.r.appspot.com/",
        tools: csusm_dsc_website_tools,
        category: categories.PERSONAL
    },
    {
        id: 3,
        name:"Trace-C19",
        description: "A community led contact tacing for the coronavirus. Trace-C19 utilizes the Google Maps API and Google's Datastore. My teammates and I worked on this application for 3 weeks as part of Google's Software Product Sprint Program back in Summer 2020.",
        source: "https://github.com/BenMob/trace-c19",
        demo: undefined,
        tools: trace_c19_tools,
        category: categories.TEAM
    },
    {
        id: 4,
        name:"Cougar Roumie",
        description: "A web application designed to help College Students find potential roommates based on interests. My team and I built this application as part of our Introductory Software Engineering Course back in Spring 2019.",
        source: "https://github.com/BenMob/cougar-roumie",
        demo: undefined,
        tools: trace_c19_tools,
        category: categories.TEAM
    },
    
]

export default projects;