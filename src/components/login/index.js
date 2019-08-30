import React from "react";
import { Drawer, Icon } from "antd";
import LoginForm from "./LoginForm";
import "antd/lib/drawer/style/css";

const LoginDrawer = props => {
  const { visible, onClose } = props;
  return (
    <Drawer visible={visible} onClose={onClose} {...props}>
      <div className={"widget-drawer"}>
        <div className="widget-heading">
          <h3 className="widget-title">Entrar</h3>
          <span className="widget-close" onClick={onClose}>
            fechar
            <Icon
              type="close"
              className="icon"
              style={{ fontSize: 18, color: "#fff" }}
              onClick={onClose}
            />
          </span>
        </div>
        <div className={"login-form-wrapper"}>
          <LoginForm />
        </div>
      </div>
    </Drawer>
  );
};

export default LoginDrawer;
