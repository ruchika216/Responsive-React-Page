import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/Logo2.jpg";
import '../../App.css';

export default class Navbar extends Component {
  state = {
    isOpen: true
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" style={{ height: "65px" ,width: "100px", paddingBottom: "4px" }} />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link className="links" to="/">Home</Link>
            </li>
            <li>
              <Link className="links" to="/feature">Features</Link>
            </li>
            <li>
              <Link className="links" to="/destination">Destination</Link>
            </li>
            <li>
              <Link className="links" to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link className="links" to="/sign-up">Sign Up</Link>
            </li>
            
          </ul>
              
        </div>
      </nav>
    );
  }
}
