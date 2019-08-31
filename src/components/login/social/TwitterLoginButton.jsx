import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialButton } from "./SocialButton";

const TwitterIcon = () => {
  return (
    <span className="icon">
      <FontAwesomeIcon
        icon={["fab", "twitter"]}
        style={{
          fontSize: "1.5rem",
          color: "white",
          paddingRight: "5px"
        }}
      />
    </span>
  );
};

export const TwitterLoginButton = props => {
  return (
    <SocialButton
      className="twitter-button"
      icon={<TwitterIcon />}
      text="Entrar com Twitter"
      textClassName="has-text-white"
      onClick={props.onClick}
    />
  );
};
