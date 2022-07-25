import React from 'react'
import stl from './Header.module.scss'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={stl.header}>
            <Nav/>
        </div>
    );
};

export default Header;