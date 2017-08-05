import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {name: "Not Changed"}
	}
  	render() {
  		setTimeout(() => {
  			this.setState({name: "Changed"})
  		},1000)
    return (
    	<div>
        	<Header/>
        	<h1>Hello, Vinoth state {this.state.name}</h1>
          <Link to="post">Post</Link>
        	<Footer/>
        </div>
    	)
  }
}
