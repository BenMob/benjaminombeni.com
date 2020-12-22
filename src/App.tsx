import React, {useState} from 'react';
import './styles/themes.scss';
import './styles/styles.scss';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Work from './components/Work';
import Interests from './components/Interests';
import { getTheme } from './styles/ThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() { 
  const [theme, setTheme] = useState(getTheme); // sets the theme
  return (
    
      <Router>
        <div className={`main-container ${theme} globals`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/work' component={Work} />
            <Route path='/interests' component={Interests} />
          </Switch>
        </div>
      </Router>
   
  )
}

export default App;
