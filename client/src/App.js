import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

class App extends React.Component {
  state={name: "Picture It Done",
  tab1: "Portfolio"
  }


  render(){
    return (
      <Router>
        <Navbar name={this.state.name} portfolio={this.state.tab1}/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
      </Router>
    );
  }
}

export default App;