import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

// CSS
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Mainteance from './Components/maintenance/maintenance';
import Home from './Components/home/home';
import Resume from './pages/resume/resume';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/resume" component={Resume}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
