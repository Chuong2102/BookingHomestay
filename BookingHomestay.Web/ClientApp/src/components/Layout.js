import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './navbar/NavMenu';
import Model from './models/Model';
import RegisterModel from './models/RegisterModel';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <RegisterModel />
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
