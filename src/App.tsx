import React, {useState} from 'react';
import './styles/themes.scss';
import './styles/styles.scss';


enum themes {
  LIGHT = 'light',
  DARK = 'dark'
}

function App() {
  const [theme, setTheme] = useState(themes.DARK)
  const toggleTheme = () => {
    if(theme === themes.DARK){
      setTheme(themes.LIGHT)
    }else{
      setTheme(themes.DARK)
    }
  }

  return (
    <div className={`main-container ${theme} globals`}>
      <button className='hello'  onClick={toggleTheme} >Toggle</button>
    </div>
  )
}

export default App;
