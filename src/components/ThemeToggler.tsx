import  React from "react"
import "../styles/styles.scss"
import "../styles/themes.scss"
import {MdBrightness4, MdBrightness5} from 'react-icons/md'
import {ThemeInfo} from '../interfaces/NavBar.i'
import {toggleTheme, themes} from '../styles/ThemeProvider'


function ThemeToggler({theme, setTheme}: ThemeInfo){
    return theme === themes.LIGHT ?  
    <MdBrightness4 className="pointer moon" onClick={() => toggleTheme(theme, setTheme)} /> : 
    <MdBrightness5 className="pointer sun" onClick={() => toggleTheme(theme, setTheme)} />
}

export default ThemeToggler;