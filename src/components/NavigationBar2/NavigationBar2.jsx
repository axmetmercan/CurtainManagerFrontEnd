import React from "react";
import "./NavigationBar2.css"
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
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

export default class NavigationBar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="mb-5">
        <Navbar color="light" light expand="md">
          <span className="hamburger" onClick={this.props.openSidebar}>
            <i className="ri-menu-line me-3"></i>
          </span>
          <NavbarBrand href="/">Curtain Manager</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            className="d-flex justify-content-between"
            isOpen={this.state.isOpen}
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/dashboard" className="nav-link text-dark ps-5">
                  Dashboard
                </Link>
              </NavItem>
           
            </Nav>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link text-dark">
                  <img className="icons" src="../images/msg-icon.png" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link text-dark">
                  <img className="icons" src="../images/bell-icon.png" />
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="nav-link text-dark">
                  <img className="icons" src="../images/profile-icon.png" />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
