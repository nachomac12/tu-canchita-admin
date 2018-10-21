import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Principal from './components/Principal/Principal';
import NotFound from './components/NotFound/NotFound';
import EditarCancha from './components/EditarCancha/EditarCancha';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
    <Router>  
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Principal} />
          <Route exact path="/editar-cancha/:id" component={EditarCancha} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
