/**
 * NavBar Interface
 */
import   { NavItemInfo } from './NavItem.i'

export interface NavBarInfo{
    initials: NavItemInfo;
    home: NavItemInfo;
    work: NavItemInfo;
    interests: NavItemInfo;
    resume: NavItemInfo;
 }

export interface ThemeInfo{
    theme: string,
    setTheme: Function
}

export interface PathDetector{
    isHome: boolean,
    isWork: boolean,
    isInterests: boolean,
    isResume : boolean
}
