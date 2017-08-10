import React, { Component } from "react";

class Navbar extends Component {
    change(page){
        this.props.change(page);
    }

  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container">
              <div className="navbar-header">
                <a href="#" className="navbar-brand">{this.props.brand}</a>
              </div>
              <div id="navbar">
                  <ul className="nav navbar-nav">
                      <li className={(this.props.currentPage === 'home') ? 'active' : ''}><a onClick={this.change.bind(this, 'home')} href="#">Home</a></li>
                      <li className={(this.props.currentPage === 'about') ? 'active' : ''}><a onClick={this.change.bind(this, 'about')} href="#">About</a></li>
                      <li className={(this.props.currentPage === 'contact') ? 'active' : ''}><a onClick={this.change.bind(this, 'contact')} href="#">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}

export default Navbar;
