import { NavBarInfo, PathDetector } from '../interfaces/NavBar.i'
import homepageImage from './media/profile.png'


export const navbar: NavBarInfo = {
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

// Represents all the possible pathnames 
export enum pathnames{
     SLASH = "/",
     HOME = "/benjaminombeni.com",
     WORK = "/work",
     INTERESTS = "/interests",
     RESUME = "/resume"
 }

 // Below are the valid state for that can be held in the path detector
 export const path_detector_initializer: PathDetector = {
     isHome: false, 
     isWork:false, 
     isInterests: false, 
     isResume: false
}

 export const isHome: PathDetector = {
     isHome: true, 
     isWork:false, 
     isInterests: false, 
     isResume: false
 }

 export const isWork: PathDetector = {
     isHome: false, 
     isWork:true, 
     isInterests: false, 
     isResume: false
 }

 export const isInterests: PathDetector = {
     isHome: false, 
     isWork:false, 
     isInterests: true, 
     isResume: false
 }

 export const isResume: PathDetector = {
     isHome: true, 
     isWork:false, 
     isInterests: false, 
     isResume: false
 }



