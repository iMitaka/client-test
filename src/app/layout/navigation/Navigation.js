import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; // MenuItem, NavDropdown,
import { LinkContainer } from 'react-router-bootstrap'
import './Navigation.css'
import { Link } from 'react-router-dom'
import NavigationMenuConstants from '../../../shared/constants/nav/NavigationMenuConstants'
import RoutesConstants from '../../../shared/constants/RoutesConstants'
import { APP_TITLE } from '../../../shared/constants/AppConstants'
import Contacts from '../footer/components/Contacts'
import facebookLogo from '../../../resources/images/contacts/facebook.png'
export default class Navigation extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={RoutesConstants.homePath}>
                            <strong className="navbar-header">
                                {APP_TITLE}
                            </strong>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to={RoutesConstants.homePath}>
                            <NavItem><strong>{NavigationMenuConstants.home}</strong></NavItem>
                        </LinkContainer>
                        {/* <NavItem></NavItem>
                        <NavItem></NavItem>
                        <NavItem>
                            <a href='https://www.facebook.com/Fara-Imoti-%D0%A4%D0%B0%D1%80%D0%B0-%D0%98%D0%BC%D0%BE%D1%82%D0%B8-143809552924434/' target="_blank" className="social-media-img-padding">
                                <img src={facebookLogo} className="img-fluid" alt="facebook"></img>
                            </a>
                        </NavItem> */}
                        {/* <LinkContainer to={'/'}>
                            <NavItem><strong>Контакти</strong></NavItem>
                        </LinkContainer> */}
                        {/* <LinkContainer to={RoutesConstants.newsPath}>
                            <NavItem><strong>{NavigationMenuConstants.news}</strong></NavItem>
                        </LinkContainer> */}
                        {/* <LinkContainer to={RoutesConstants.agentsPath}>
                            <NavItem><strong>{NavigationMenuConstants.agents}</strong></NavItem>
                        </LinkContainer> */}
                        {/* <NavDropdown title={NavigationMenuConstants.homesTypes} id="basic-nav-dropdown">
                            <LinkContainer to={RoutesConstants.propertiesPath}>
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.apartaments}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.houses}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.plots}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.buisnessCenters}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.buildings}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.garages}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.sales}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.rents}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/apartaments">
                                <MenuItem>
                                    <div className="dropdown-menu-text">
                                        <strong>
                                            {NavigationMenuConstants.allNeeds}
                                        </strong>
                                    </div></MenuItem>
                            </LinkContainer>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
