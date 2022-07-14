import React from 'react';
import stl from './Nav.module.css'

const Nav = () => {
    return (
        <div className={stl.wraper}>
            <div className={stl.container}>
                <a className={stl.link} href="">Main</a>
                <a className={stl.link} href="">Skills</a>
                <a className={stl.link} href="">Works</a>
                <a className={stl.link} href="">Contacts</a>
            </div>
        </div>
    )
        ;
};

export default Nav;