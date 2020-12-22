import React from 'react'
import { Link }from 'react-router-dom'
import '../styles/styles.scss'

// Alternative solution for NavItemInfo
// TODO: Figure out a way to use the NavItemInfo interface instead.
interface NavItemInfoWithAnimation{
    name: string,
    link: string,
    animation: Function
}

function NavItem({name, link, animation}: NavItemInfoWithAnimation){
    return (
        <Link to={link} onClick={() => animation()} >
            <div className="nav-item">
                <div className="pointer bottom-border-onhover">{name}</div>
            </div>
        </Link>
    )

}

export default NavItem;

