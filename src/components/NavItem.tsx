import React, {useState, useEffect} from 'react';
import { Link }from 'react-router-dom';
import '../styles/styles.scss';
import { navbar } from '../data/NavBar';
import resume from '../docs/resume.pdf';

// Alternative solution for NavItemInfo
// TODO: Figure out a way to use the NavItemInfo interface instead.
interface NavItemInfoWithAnimation{
    name: string,
    link: string,
    animation: Function,
    isLocation: boolean
}

function NavItem({name, link, animation, isLocation}: NavItemInfoWithAnimation){
    const [currentPath, setCurrentPath] = useState("");
    useEffect(() => {
        if(isLocation){
            setCurrentPath("current-path");
            animation();
        }else{
            setCurrentPath("");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLocation])

    // Renders the resume pdf 
    if(name === navbar.resume.name){
        return (
            <div className="nav-item">
                <a href={resume} target="_blank" rel="noreferrer"  className={`pointer bottom-border-onhover ${currentPath}`}>{name}</a>
            </div> 
        )
    }

    // Renders the nav item path
    return (
        <Link to={link}>
            <div className="nav-item">
                <div className={`pointer bottom-border-onhover ${currentPath}`}>{name}</div>
            </div>
        </Link>
    )  
}

export default NavItem;

