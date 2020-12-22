/******************
 * Manages Themes
 */

// Available Themes
enum themes {
  LIGHT = 'light',
  DARK = 'dark'
}

// Saves the current theme to local storage
const saveTheme = (theme:string): void => {
    localStorage.setItem("theme", theme);
}

// Gets the current theme from local storage
const getTheme = (): string => {
    const theme: string | null = localStorage.getItem("theme");
    return theme === null ? themes.DARK : theme;
}   

// Theme Toggler
const toggleTheme = (theme: string, setTheme: Function): void => {
    if(theme === themes.DARK){
        setTheme(themes.LIGHT);
        saveTheme(themes.LIGHT);
    }else{
        setTheme(themes.DARK)
        saveTheme(themes.DARK);
    }
}

export {
    themes,
    toggleTheme,
    getTheme
}