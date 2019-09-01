import React, { Component } from "react";
import logo from "../../assets/images/eternal-logo-white.png";

export default class Footer extends Component {
  render() {
    return (
      <section>
        <footer className="has-background-black">
          <div className="container">
            <div className="content">
              <div className="columns is-gapless">
                <div className="column is-5">
                  <div className="mobile-padding">
                    <div className="footer-logo">
                      <img src={logo} alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="column is-1"></div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
