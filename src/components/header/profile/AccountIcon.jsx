import React from "react";
import accountImage from "../../../assets/images/user-icon.svg";

const AccountIcon = props => {
  return (
    <span className="account-button">
      <img
        src={accountImage}
        alt="Conta"
        className="icon"
        style={{ minWidth: 28, minHeight: 28 }}
        onClick={props.onClick}
      />
    </span>
  );
};

export default AccountIcon;
