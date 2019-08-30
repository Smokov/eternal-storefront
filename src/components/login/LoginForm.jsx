import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Checkbox, Icon } from "antd";
import { GoogleLoginButton, FacebookLoginButton } from "./social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "antd/lib/checkbox/style/css";
import "antd/lib/icon/style/css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", rememberMe: true };
  }

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onCheckBoxChange = event => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  onFormSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    // call eternal-authentication service API
  };

  onSocialLogin = event => {
    // check type (FB or Google ...)
    // call eternal-authentication service API
  };

  render() {
    const { rememberMe } = this.state;
    return (
      <>
        <form className="login-form" onFormSubmit={this.onFormSubmit}>
          <p className={"login-field"}>
            <label>Usuário ou Email</label>
            <input
              name={"username"}
              type="text"
              autoComplete="username"
              onChange={this.onInputChange}
            />
          </p>
          <p className={"login-field"}>
            <label>Senha</label>
            <input
              type="password"
              autoComplete="current-password"
              onChange={this.onInputChange}
            />
          </p>
          <p className={"login-button-wrap"}>
            <button type="submit" className="login-button button is-primary">
              Entrar
            </button>
          </p>
          <div className={"login-form-footer"}>
            <Checkbox
              name="rememberMe"
              checked={rememberMe}
              onChange={this.onCheckBoxChange}
            >
              Lembrar-me
            </Checkbox>
            <Link className={"lost-password"} to={"account/lost-password"}>
              <Icon icon="lock" style={{ fontSize: "3rem" }} />
              Esqueceu a senha?
            </Link>
          </div>
          <h2 className="social-login-title has-text-dark">
            <span className="has-text-dark">Ou entre com</span>
          </h2>

          <div>
            <GoogleLoginButton onClick={this.onSocialLogin} />
            <FacebookLoginButton type="button" onClick={this.onSocialLogin} />
            <div className="social-login-button">
              <Link className="columns is-centered">
                <FontAwesomeIcon
                  className="column"
                  icon={["fab", "twitter"]}
                  style={{ fontSize: "1rem", color: "blue" }}
                />
                <span className="column is-2">Entrar com Twitter</span>
              </Link>
            </div>
          </div>
        </form>
        <div className="register-question level">
          <span className="create-account-text level-item has-text-centered">
            Não possui uma conta?
          </span>
          <Link
            className="level-item has-text-centered"
            to={"account/register"}
          >
            Criar uma conta
          </Link>
        </div>
      </>
    );
  }
}
