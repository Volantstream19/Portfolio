import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Projects from './Components/Project/Projects.jsx';
import Resume from './Components/Resume/Resume.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />

          <Route exact path="/projects" component={Projects} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
