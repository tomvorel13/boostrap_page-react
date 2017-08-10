import React, { Component } from "react";
import Clock from './Clock';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
            <h1>{this.props.heading}</h1>
            <Clock />
            <p className="lead">{this.props.text}</p>
            <p><a href="#" role="button" className="btn btn-primary btn-lg">Learn more!</a></p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
