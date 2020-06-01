import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import ViewJobs from './pages/ViewJobs/ViewJobs';
import AddJobs from './pages/AddJob/AddJob';
import { useAuth0 } from "./react-auth0-spa";

function App() {
  const { loading } = useAuth0();

<<<<<<< HEAD
class App extends React.Component {
  state={name: "Picture It Done",
  }
//  componentDidMount() {
//    document.addEventListener('DOMContentLoaded', function() {
//      var elems = document.querySelectorAll('.sidenav');
//      var instances = M.Sidenav.init(elems, options);
//    });

//  }

  render(){
    return (
      <Router>
        <Navbar name={this.state.name}/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/ViewJobs" component={ViewJobs}/>
          <Route exact path="/AddJob" component={AddJobs}/>
        </Switch>
      </Router>
    );
  }
=======
  if (loading) {
    return <div>Loading...</div>;
  } 
  return (
    <Router>
      <Navbar name={"Picture It Done"}/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/ViewJobs" component={ViewJobs}/>
        <Route exact path="/AddJob" component={AddJobs}/>
      </Switch>
    </Router>
  );
>>>>>>> master
}

export default App;
