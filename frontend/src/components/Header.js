import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/about'>Rólam | </Link>
            <Link to='/gallery'>Galéria | </Link>
            <Link to='/courses'>Tanfolyamok | </Link>
            <Link to='/shop'>Áruház | </Link>
            <Link to='/blog'>Blog | </Link>
            <Link to='/contact'>Kapcsolat</Link>
        </div>
    );
}

export default Header;
