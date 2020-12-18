import React, {useState} from 'react';
import './styles/themes.scss';
import './styles/styles.scss';
import {toggleTheme, getTheme} from './styles/ThemeProvider'


function App() {
  const [theme, setTheme] = useState(getTheme())

  return (
    <div className={`main-container ${theme} globals`}>
      <button className='hello'  onClick={() => toggleTheme(theme, setTheme)} >Toggle</button>
    </div>
  )
}

export default App;
