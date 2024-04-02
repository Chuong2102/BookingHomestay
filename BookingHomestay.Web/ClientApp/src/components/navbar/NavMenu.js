import React, { Component } from 'react';
import Container from '../Container';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Search from './Search';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className='fixed w-full bg-white z-10 shadow-sm'>
        <div className='py-4 border-b-[1px]'>

          <Container>
            <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
              <Logo/>
              <Search/>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}