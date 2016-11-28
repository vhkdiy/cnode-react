//加载样式
// import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";

//加载组件
import 'regenerator-runtime/runtime';
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './components/App';
// import Home from "./components/Home";
// import About from "./components/About";
// import Getstart from "./components/GetStart";
// import Login from "./components/Login";
// import ContentPage from "./components/ContentPage";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import store from "./store";

function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent(location, cb) {
      System.import('./components/Home')
        .then(loadRoute(cb))
        .catch(errorLoading);
    },
  },
  childRoutes: [
    {
      path: '/about',
      getComponent(location, cb) {
        System.import('./components/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/getstart',
      getComponent(location, cb) {
        System.import('./components/Getstart')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/login',
      getComponent(location, cb) {
        System.import('./components/Login')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/topic/:id',
      getComponent(location, cb) {
        System.import('./components/ContentPage')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
    }
  ]
}

// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} ></IndexRoute>
//       <Route path="/about" component={About}/>
//       <Route path="/getstart" component={Getstart} />
//       <Route path="/login" component={Login} />
//       <Route path="/topic/:id" component={ContentPage}></Route>
//     </Route>
//   </Router>
// );

const router = (
  <Provider store={store}>
    <Router history={hashHistory} routes={routes}/>
  </Provider>
)

render(router, document.querySelector("#root"));