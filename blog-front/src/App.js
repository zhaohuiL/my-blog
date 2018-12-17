import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom' 
import './App.css';
import HomePage from '../src/pages/HomePage'
import About from '../src/pages/About'
import Archives from '../src/pages/Archives'
import NotFound from '../src/pages/NotFound'
import Aticle from './pages/Aticle';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/archives" component={Archives}/>
          <Route exact path="/archives/:year" component={Archives}/>
          {/* <Redirect exact path="/archives/2016" to="/archives"/> */}
          <Route exact path="/:year/:mounth/:day/:timename" component={Aticle}/>
          <Route exact path="/demo" component={NotFound}/>
          <Route exact path="/music" component={NotFound}/>
          {/* <Redirect exact path="/" to="/index"/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
