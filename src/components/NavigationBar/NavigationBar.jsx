import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {Link} from "react-router-dom"

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" >
          <NavbarBrand href="/">Curtain Manager</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="d-flex justify-content-center" isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className='nav-link text-dark  '>Anasayfa</Link>
              </NavItem>
              <NavItem>
              <Link to="/about/" className='nav-link text-dark  '>Hakkımızda</Link>
              </NavItem>
              <NavItem>
              <Link to="/iletisim/" className='nav-link text-dark  '>İletişim</Link>
              </NavItem>
                
            </Nav>
          </Collapse>

        </Navbar>
      </div>
    );
  }
}