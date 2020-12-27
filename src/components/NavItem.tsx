import React, {useState, useEffect} from 'react'
import { Link }from 'react-router-dom'
import '../styles/styles.scss'

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

    return (
        <Link to={link}>
            <div className="nav-item">
                <div className={`pointer bottom-border-onhover ${currentPath}`}>{name}</div>
            </div>
        </Link>
    )

}

export default NavItem;

