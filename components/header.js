import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Row,
  Col
} from "shards-react";

export default class NavExample extends React.Component {
  constructor(props) {
    super(props);


    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      dropdownOpen: false,
      collapseOpen: false
    };
  }



  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen
      }
    });
  }

  render() {
    return (

      <Navbar type="dark" className="mainColorBg" expand="md" >
        <NavbarBrand href="#">Arakhond</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse open={this.state.collapseOpen} navbar>
          <Nav navbar full sticky>
            <NavItem>
              <NavLink active href="/">
                Домашняя
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/addjoober">
                Добавить работника
              </NavLink>
            </NavItem>
          </Nav>

          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink active href="">
                Вход
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="">
                Регистрация
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

    );
  }
}