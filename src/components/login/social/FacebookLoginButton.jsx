import React from "react";

export const FacebookLoginButton = props => {
  return (
    <button
      className="social-login-button fb-login-button fb-icon"
      onClick={props.onClick}
    >
      Entrar com Facebook
    </button>
  );
};
