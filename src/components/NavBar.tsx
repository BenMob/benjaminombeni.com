import React, {useState} from 'react'
import ThemeToggler from './ThemeToggler'
import navbar from '../data/NavBar'
import NavItem from "./NavItem"
import { ThemeInfo } from '../interfaces/NavBar.i'

const expanded = "navigation-bar-expanded"
const shrunk = "navigation-bar-shrunk"

function Navbar({theme, setTheme}: ThemeInfo){
    const [navState, setNavState] = useState(expanded)

    const shrink = () => {
        if(navState === shrunk){
            return;
        }else{
            setNavState(shrunk)
        }
    }

    const expand = () => {
        if(navState === expanded){
            return
        }else{
            setNavState(expanded)
        }
    }

    return(
        <div className={`${navState} flex-space-around`}>
            <div>
                <h2>{navbar.initials.name}</h2>
            </div>
            <div className="flex-space-between">
                <div className="flex-space-around">
                    <NavItem name={navbar.home.name} link={navbar.home.link} />
                    <NavItem name={navbar.work.name} link={navbar.work.link} />
                    <NavItem name={navbar.interests.name} link={navbar.interests.link} />
                    <NavItem name={navbar.resume.name} link={navbar.resume.link} />
                    <div className="pointer" onClick={expand}>|| Home |</div>
                    <div className="pointer" onClick={shrink}>| Work |</div> 
                    <div className="pointer" onClick={shrink}>| Interests ||</div>   
                </div>
                <div className="theme-toggler">
                    <ThemeToggler theme={theme} setTheme={setTheme} />
                </div>
            </div>
            
           
        </div>
    )
}

export default Navbar