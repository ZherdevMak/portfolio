import React from 'react'
import stl from './Header.module.css'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={stl.header}>
            <Nav/>
        </div>
    );
};

export default Header;