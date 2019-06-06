import React from 'react';
import { Route, Switch, } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
//we are now treating App.js like a routing station


const App = () => (
  <>
    <Navbar />
      <Switch>
        {/* // must pass path and component as prop to a route component */}
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/blog" component={ Blog } />
        <Route component={ NoMatch }/>
        {/* error page needs to be at bottom of components/routes */}
      </Switch>
  </>
);

export default App;