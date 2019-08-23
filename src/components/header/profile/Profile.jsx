import React from "react";
import profile from "../../../images/user-icon.svg";

export const ProfileIcon = props => {
  return (
    <span className="account-button" onClick={props.onClick}>
      <img
        src={profile}
        alt="profile"
        className="icon"
        title={"profile"}
        style={{ minWidth: 35, minHeight: 35, padding: 4 }}
      />
    </span>
  );
};
