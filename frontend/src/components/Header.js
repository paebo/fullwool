import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../static/fullwool_icon_placeholder.png"

const Navbar = styled.nav`
    color: black;
    font-family: "Courier New", Courier, monospace;
    padding: 2%;
    background: papayawhip;
    text-decoration: none;
`;

const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
`;

// TODO: fing a more elegant way for the /home endpoint
function Header() {
    return (
        <Navbar>
            <Link to="/" ><img className="logo" src={logo} alt=""/></Link>
            <NavLink to='/about'>Rólam | </NavLink>
            <NavLink to='/gallery'>Galéria | </NavLink>
            <NavLink to='/courses'>Tanfolyamok | </NavLink>
            <NavLink to='/shop'>Áruház | </NavLink>
            <NavLink to='/blog'>Blog | </NavLink>
            <NavLink to='/contact'>Kapcsolat</NavLink>
        </Navbar>
    );
}

export default Header;
