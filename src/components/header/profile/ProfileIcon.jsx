import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";
import profile from "../../../assets/images/user-icon.svg";
import "antd/lib/popover/style/css";

export default class ProfileIcon extends Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  onVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    const { visible } = this.state;
    return (
      <span className="account-button">
        <Popover
          content={<DropdownMenuItems onClick={this.hide} />}
          visible={visible}
          onVisibleChange={this.onVisibleChange}
        >
          <NavLink to={"Account"} onClick={this.hide}>
            <img
              src={profile}
              alt="Conta"
              className="icon"
              title={"Conta"}
              style={{ minWidth: 28, minHeight: 28 }}
            />
          </NavLink>
        </Popover>
      </span>
    );
  }
}

const DropdownMenuItems = props => {
  return (
    <div>
      <NavLink className="dropdown-item" to={"Account"} onClick={props.onClick}>
        Conta
      </NavLink>
      <NavLink className="dropdown-item" to={"Orders"} onClick={props.onClick}>
        Pedidos
      </NavLink>
      <NavLink className="dropdown-item" to={"Logout"} onClick={props.onClick}>
        Logout
      </NavLink>
    </div>
  );
};
