import { NavBarInfo } from '../interfaces/NavBar.i'
import homepageImage from './media/profile.png'


const navbar: NavBarInfo = {
    initials : {
        name:"BO",
        link: homepageImage
    },
    home: {
        name: "Home",
        link: "/"
    },
    work: {
        name : "Work",
        link: "/work"
    },
    interests : {
        name: "Interests",
        link: "/interests"
    },
    resume : {
        name: "Resume",
        link: ""
    }
    
}
export default navbar;


