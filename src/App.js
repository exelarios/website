import React, { Component } from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

// CSS
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Mainteance from './Components/maintenance/maintenance';
import Home from './Components/home/home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
