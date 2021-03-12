import React, {useState} from 'react';
import './styles/themes.scss';
import './styles/styles.scss';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Work from './components/Work';
import Footer from "./components/Footer";
// import Interests from './components/Interests';
import { getTheme } from './styles/ThemeProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { pathnames } from "./data/NavBar"
// import Footer from './components/Footer'


function App() { 
  const [theme, setTheme] = useState(getTheme); // sets the theme
  return (
      <Router base-name="/benjaminombeni.com">
        <div className={`main-container ${theme} globals`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path={pathnames.SLASH} component={Home} exact />
            <Route path={pathnames.WORK} component={Work} />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      </Router>
      
  )
}

const NotFound = (): JSX.Element => {
  return(
    <div className={"NotFound"}>
      <h1>Page Not Found!</h1>
    </div>
  )
}

/*<Route path={pathnames.INTERESTS} component={Interests} />*/

export default App;
