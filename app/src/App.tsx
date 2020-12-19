import React, {useState} from 'react';
import './styles/themes.scss';
import './styles/styles.scss';
import Navbar from './components/NavBar';
import {getTheme} from './styles/ThemeProvider'

function App() {
  const [theme, setTheme] = useState(getTheme); // sets the theme
  return (
    <div className={`main-container ${theme} globals`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App;
