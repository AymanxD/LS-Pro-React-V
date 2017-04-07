import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Products from './Products.jsx';
import Home from './Home.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="NavBar">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
          <div className="Route">
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
