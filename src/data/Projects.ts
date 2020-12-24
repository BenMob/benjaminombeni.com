import { Project_i } from '../interfaces/Project.i'

enum categories {
    PERSONAL = "Personal",
    TEAM = "Team"
}

const projects : Array<Project_i> = [
    {
        id: 1,
        name:"Cougar Roumies",
        description: "A web application that allows college students to find roommates based on their interests A web application that allows college students to find roommates based on their interests",
        source: "http://cougarroomie.tech/",
        demo: "https://github.com/BenMob/cougar-roumie",
        tools: ["Java", "Javascript", "Html", "Bootstrap"],
        category: categories.TEAM
    },
    {
        id: 2,
        name:"Cougar Roumies",
        description: "A web application that allows college students to find roommates based on their interests",
        source: "http://cougarroomie.tech/",
        demo: "https://github.com/BenMob/cougar-roumie",
        tools: ["Java", "Javascript", "Html", "Bootstrap"],
        category: categories.TEAM
    },
    {
        id: 3,
        name:"Cougar Roumies",
        description: "A web application that allows college students to find roommates based on their interests",
        source: "http://cougarroomie.tech/",
        demo: "https://github.com/BenMob/cougar-roumie",
        tools: ["Java", "Javascript", "Html", "Bootstrap"],
        category: categories.TEAM
    },
    {
        id: 4,
        name:"Cougar Roumies",
        description: "A web application that allows college students to find roommates based on their interests",
        source: "http://cougarroomie.tech/",
        demo: "https://github.com/BenMob/cougar-roumie",
        tools: ["Java", "Javascript", "Html", "Bootstrap"],
        category: categories.TEAM
    }
]

export default projects;