import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
    padding: 2%;
    background: papayawhip;
`;

function Header() {
    return (
        <Navbar className='header'>
            <Link to='/about'>Rólam | </Link>
            <Link to='/gallery'>Galéria | </Link>
            <Link to='/courses'>Tanfolyamok | </Link>
            <Link to='/shop'>Áruház | </Link>
            <Link to='/blog'>Blog | </Link>
            <Link to='/contact'>Kapcsolat</Link>
        </Navbar>
    );
}

export default Header;
