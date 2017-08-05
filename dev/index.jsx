import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";

const app = document.getElementById('container');

ReactDOM.render(
  <BrowserRouter>
    <div>
    <Route path="/" component={Layout}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/post" component={Post}></Route>
    </div>
  </BrowserRouter>
,app);