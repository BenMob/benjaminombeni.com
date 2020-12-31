import React, {useState, useEffect} from "react";
import ThemeToggler from "./ThemeToggler";
import {
    navbar, pathnames, 
    path_detector_initializer,
    isHome,
    isWork,
    isInterests,
    isResume
} from "../data/NavBar";
import NavItem from "./NavItem";
import { ThemeInfo, PathDetector } from  "../interfaces/NavBar.i";
import { MdDehaze } from "react-icons/md";
import { useLocation } from "react-router-dom";

const expanded = "navigation-bar-expanded" // Represents the CSS class containing the animation that expands the navigation bar.
const shrunk = "navigation-bar-shrunk"     // Represents the CSS class containing the animation that shrinks the navigation bar.
const show_side_nav = "show-side-nav"      // Represents the CSS class containing the animation that slides the sidebar in from the left.
const hide_side_nav = "hide-side-nav"      // Represents the CSS class containing the animation that slides the sidebar out to the left.
const hidden = "hidden"

function Navbar({theme, setTheme}: ThemeInfo){
    const [navState, setNavState] = useState<string>(expanded)               // Controls the state of the navbar on all screens.
    const [sideBarState, setSideBarSate] = useState<string>(hidden)   // Controls the state of the sidenav on small screens only.
    const [path_detector, setPathDetector] = useState<PathDetector>(path_detector_initializer)
    const location = useLocation();

    useEffect(() => {
        const updatePathDetector = () => {
            switch (location.pathname) {
                case pathnames.SLASH:
                    setPathDetector(isHome);
                    break;
                case pathnames.WORK:
                    setPathDetector(isWork);
                    break;
                case pathnames.INTERESTS:
                    setPathDetector(isInterests);
                    break;
                case pathnames.RESUME:
                    setPathDetector(isResume);
                    break;
                default:
                    break;
            }
        }

        updatePathDetector();
    }, [location]);
   
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
    const toggleSideNav = ():void => {
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
    const initials = (name: string): JSX.Element => {
        return <h2>{name}</h2>
    }

    return(
        <div className={`${navState}`}>
            <div>
                {navState === expanded && portrait(navbar.initials.link)}
                {navState === shrunk && initials(navbar.initials.name)}
            </div>
            <div className="flex-space-between">
                <MdDehaze className="hamberger pointer" onClick={toggleSideNav} />
                <div className={`nav-items ${sideBarState}`}>
                    <div className="close_navbar pointer" onClick={toggleSideNav}>x</div>
                    <NavItem name={navbar.home.name} link={navbar.home.link} animation={expand} toggleSideNav={toggleSideNav} isLocation={path_detector.isHome} />
                    <NavItem name={navbar.work.name} link={navbar.work.link} animation={shrink} toggleSideNav={toggleSideNav} isLocation={path_detector.isWork} />
                    <NavItem name={navbar.interests.name} link={navbar.interests.link} animation={shrink} toggleSideNav={toggleSideNav} isLocation={path_detector.isInterests} />
                    <NavItem name={navbar.resume.name} link={navbar.resume.link} animation={expand} toggleSideNav={toggleSideNav} isLocation={path_detector.isResume} /> 
                </div>
                <div className="theme-toggler">
                    <ThemeToggler theme={theme} setTheme={setTheme} />
                </div>
            </div> 
        </div>
    )
}

export default Navbar