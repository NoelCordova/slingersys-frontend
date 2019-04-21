import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="Navbar">
          <div className="container-fluid">
            <Link className="Navbar__brand" to="/">
              <span className="font-weight-light">Slinger</span>
              <span className="font-weight-bold">sys</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
