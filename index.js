import "bootstrap/dist/css/bootstrap.css";
import "styles/style.css";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './components/App';
import Home from "./components/Home";
import About from "./components/About";
import Getstart from "./components/GetStart";
import Login from "./components/Login";
import ContentPage from "./components/ContentPage";
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import { getTopics } from "./api";
import store from "./store";

// async function loadTopicForHome() {
//   const topics = await getTopics();

//   store.dispatch({
//     type: "LOAD_TOPICS",
//     topics: topics,
//     isLoading: false,
//   });
//   // 1. 做异步请求
//   // 2. 获取数据后 dispatch LOAD_TOPICS 动作
// }

const router = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="/about" component={About}/>
        <Route path="/getstart" component={Getstart} />
        <Route path="/login" component={Login} />
        <Route path="/topic/:id" component={ContentPage}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.querySelector("#root"));