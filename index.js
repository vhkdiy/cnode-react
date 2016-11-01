import "bootstrap/dist/css/bootstrap.css";
import "styles/style.css";

import React from "react";
import { render } from "react-dom";
import App from './components/App';
import Home from "./components/Home";
import About from "./components/About";
import Getstart from "./components/GetStart";
import Login from "./components/Login";
import ContentPage from "./components/ContentPage";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/about" component={About} />
      <Route path="/getstart" component={Getstart} />
      <Route path="/login" component={Login} />
      <Route path="/topic/:id" component={ContentPage}></Route>
    </Route>
  </Router>
)

render(router, document.querySelector("#root"));