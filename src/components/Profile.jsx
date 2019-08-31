import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div className="columns is-gapless">
        <div className="column is-half profile-left-panel">Login</div>
        <div className="column is-half">Register</div>
      </div>
    );
  }
}
