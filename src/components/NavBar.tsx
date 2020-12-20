import React, {useState} from 'react'
import ThemeToggler from './ThemeToggler'
import navbar from '../data/NavBar'
import NavItem from './NavItem'
import { ThemeInfo } from '../interfaces/NavBar.i'

const expanded = "navigation-bar-expanded" // Represents the CSS class containing the animation that expands the navigation bar.
const shrunk = "navigation-bar-shrunk"     // Represents the CSS class containing the animation that shrinks the navigation bar.

function Navbar({theme, setTheme}: ThemeInfo){
    const [navState, setNavState] = useState(expanded)

    // Changes the state of the navigation bar from expanded to shrunk. 
    const shrink = () => {
        if(navState === shrunk){
            return;
        }else{
            setNavState(shrunk)
        }
    }

    // Changes the state of the navigation bar from shrunk to expanded.
    const expand = () => {
        if(navState === expanded){
            return
        }else{
            setNavState(expanded)
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
        <div className={`${navState} flex-space-around`}>
            <div>
                {navState === expanded && portrait(navbar.initials.link)}
                {navState === shrunk && initials(navbar.initials.name) }
            </div>
            <div className="flex-space-between">
                <div className="flex-space-around">
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