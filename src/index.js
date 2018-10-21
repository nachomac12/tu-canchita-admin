import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCBOrFJqatsgzm0kvT87liAqxBkfcy7TcA",
    authDomain: "tu-canchita.firebaseapp.com",
    databaseURL: "https://tu-canchita.firebaseio.com",
    projectId: "tu-canchita",
    storageBucket: "tu-canchita.appspot.com",
    messagingSenderId: "847113784299"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
