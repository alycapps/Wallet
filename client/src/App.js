import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/nav"
import All from "./pages/all"
import Add from "./pages/add"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={All}/>
          <Route exact path="/all" component={All}/>
          <Route exact path="/add" component={Add}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;