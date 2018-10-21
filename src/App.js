import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import AgregarCancha from './components/AgregarCancha/AgregarCancha';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AgregarCancha />
      </div>
    );
  }
}

export default App;
