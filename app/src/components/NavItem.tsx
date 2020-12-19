import React from 'react'
import { NavItemInfo } from '../interfaces/NavItem.i'
import '../styles/styles.scss'

function NavItem({name, link}: NavItemInfo){
    return (
        <div className="nav-item">
            <div className="pointer">{name}</div>
        </div>
    )

}

export default NavItem;

