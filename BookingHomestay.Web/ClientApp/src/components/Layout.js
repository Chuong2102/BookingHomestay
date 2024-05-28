import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './navbar/NavMenu';
import Model from './models/Model';
import RegisterModel from './models/RegisterModel';
import LoginModel from './models/LoginModel';
import { useSelector, useDispatch } from "react-redux";

const Layout = (props) => {
  const displayName = Layout.name;

  const isLogin = useSelector((state) => state.authentication.value);

  return (
    <div>
      {isLogin && (<LoginModel/>)}
      {!isLogin && (<RegisterModel/>)}

      {props.children}
    </div>
  );
}

export default Layout;