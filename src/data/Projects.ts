import { Project_i } from '../interfaces/Project.i'
import colors from '../data/tools_colors.json'

enum categories {
    PERSONAL = "Personal",
    TEAM = "Team"
}

const cards_cast_tools = [
    {
        name: "HTML",
        color: colors.HTML
    },
    {
        name: "CSS",
        color: colors.CSS
    },
    {
        name: "JavaScript",
        color: colors.JavaScript
    }
]



const projects : Array<Project_i> = [
    {
        id: 1,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games, games ranging from Card Flips to Crazy 8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: "",
        demo: "",
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    {
        id: 2,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games, games ranging from Card Flips to Crazy 8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: "",
        demo: "",
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    {
        id: 3,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games, games ranging from Card Flips to Crazy 8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: "",
        demo: "",
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    {
        id: 4,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games ranging from Card-Flips to Crazy-8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: "",
        demo: "",
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    {
        id: 5,
        name:"Card-Cast",
        description: "I plan to make this a web platform that host some of the most popular card games ranging from Card-Flips to Crazy-8 and more. To me, building card games is a great and fun way to practice some problem solving.",
        source: "",
        demo: "",
        tools: cards_cast_tools,
        category: categories.PERSONAL
    },
    
]

export default projects;