import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";

export default class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        {this.props.children}
      </Fragment>
    );
  }
}
