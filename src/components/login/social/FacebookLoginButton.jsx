import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialButton } from "./SocialButton";

const FacebookIcon = () => {
  return (
    <FontAwesomeIcon
      icon={["fab", "facebook-square"]}
      style={{
        fontSize: "1.5rem",
        color: "white",
        paddingRight: "5px"
      }}
    />
  );
};

export const FacebookLoginButton = props => {
  return (
    <SocialButton
      className="fb-login-button"
      icon={<FacebookIcon />}
      text="Entrar com Facebook"
      textClassName="has-text-white"
      onClick={props.onClick}
    />
  );
};
