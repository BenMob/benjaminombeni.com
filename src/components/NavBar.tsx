import React, {useState} from 'react'
import ThemeToggler from './ThemeToggler'
import navbar from '../data/NavBar'
import NavItem from './NavItem'
import { ThemeInfo } from '../interfaces/NavBar.i'
import { FaBars } from  "react-icons/fa"

const expanded = "navigation-bar-expanded" // Represents the CSS class containing the animation that expands the navigation bar.
const shrunk = "navigation-bar-shrunk"     // Represents the CSS class containing the animation that shrinks the navigation bar.
const show_side_nav = "show-side-nav"      // Represents the CSS class containing the animation that slides the sidebar in from the left.
const hide_side_nav = "hide-side-nav"      // Represents the CSS class containing the animation that slides the sidebar out to the left.
  

function Navbar({theme, setTheme}: ThemeInfo){
    const [navState, setNavState] = useState<string>(expanded)               // Controls the state of the navbar on all screens.
    const [sideBarState, setSideBarSate] = useState<string>(hide_side_nav)   // Controls the state of the sidenav on small screens only.
   
    // Changes the state of the navigation bar from expanded to shrunk. 
    const shrink = ():void => {
        if(navState === shrunk){
            return;
        }else{
            setNavState(shrunk)
        }
    }

    // Changes the state of the navigation bar from shrunk to expanded.
    const expand = ():void => {
        if(navState === expanded){
            return
        }else{
            setNavState(expanded)
        }
    }

    // Toggles the sidebar from visible to invisible and vice versa
    const toggleSideBar = ():void => {
        if(sideBarState === hide_side_nav){
            setSideBarSate(show_side_nav)
        }else{
            setSideBarSate(hide_side_nav)
        }
    }

    // Renders Benjamin's portrait as an image.
    const portrait = (link: string) : JSX.Element => {
        return  <img className="portrait" src={link} alt="Benjamin's Portrait" />
    }

    // Renders Benjamin's initials
    const initials = (name: string): JSX.Element =>{
        return <h2>{name}</h2>
    }

    return(
        <div className={`${navState}`}>
            <div>
                {navState === expanded && portrait(navbar.initials.link)}
                {navState === shrunk && initials(navbar.initials.name)}
            </div>
            <div className="flex-space-between">
                <FaBars className="humberger pointer" onClick={toggleSideBar} />
                <div className={`nav-items ${sideBarState}`}>
                    <NavItem name={navbar.home.name} link={navbar.home.link} animation={expand} />
                    <NavItem name={navbar.work.name} link={navbar.work.link} animation={shrink} />
                    <NavItem name={navbar.interests.name} link={navbar.interests.link} animation={shrink} />
                    <NavItem name={navbar.resume.name} link={navbar.resume.link} animation={expand} /> 
                </div>
                <div className="theme-toggler">
                    <ThemeToggler theme={theme} setTheme={setTheme} />
                </div>
            </div> 
        </div>
    )
}

export default Navbar