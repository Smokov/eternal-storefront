import React from "react";
import PropTypes from "prop-types";

export const SocialButton = ({
  className,
  icon,
  onClick,
  text,
  textClassName
}) => {
  return (
    <button
      className={"button social-login-button " + className}
      onClick={onClick}
    >
      {icon ? <span className="icon">{icon}</span> : null}
      <span className={textClassName}>{text}</span>
    </button>
  );
};

SocialButton.protoTypes = {
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  textClassName: PropTypes.string
};
