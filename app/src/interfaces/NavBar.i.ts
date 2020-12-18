/**
 * NavBar Interface
 */
import  NavItem  from './NavItem.i'

interface NavBar{
     initials: string;
     about: NavItem;
     work: NavItem;
     communities: NavItem;
     favorites: NavItem
 }

export default NavBar;