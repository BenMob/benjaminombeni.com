import { Project_i } from '../interfaces/Project.i'
import { cards_cast_tools, lm_video_tour_tools, trace_c19_tools } from "./Projects_tools"

enum categories {
    PERSONAL = "Personal",
    TEAM = "Team"
}



const projects : Array<Project_i> = [
    {
        id: 1,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games, games ranging from Card-Flips to Crazy-8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: undefined,
        demo: undefined,
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    {
        id: 2,
        name:"LM-Video-Tour",
        description: "A Mobile Application that allows users to go on virtual housing tours. My teammates and I worked on this application using React Native as part the Fab Friday Hackathon at our University back in Fall 2020",
        source: 'https://github.com/amulyaparmar/tour.video-team1',
        demo: undefined,
        tools: lm_video_tour_tools,
        category: categories.TEAM
    },
    {
        id: 3,
        name:"Trace-C19",
        description: "A Web Application that allows a community led contact tacing for the coronavirus. Trace-C19 utilizes the Google Maps API and Google's Datastore. My teammates and I worked on this application for 3 weeks as part of Google's Software Product Sprint Program back in Summer 2020.",
        source: "https://github.com/BenMob/trace-c19",
        demo: undefined,
        tools: trace_c19_tools,
        category: categories.TEAM
    },
    {
        id: 4,
        name:"Cougar Roumie",
        description: "A Web Application designed to help College Students find potential roommates based on interests. My team and I built this application as part of our Introductory Software Engineering Course back in Spring 2019",
        source: "https://github.com/BenMob/cougar-roumie",
        demo: "http://cougarroomie.tech/",
        tools: trace_c19_tools,
        category: categories.TEAM
    },
    
]

export default projects;