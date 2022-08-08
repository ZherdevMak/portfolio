import React from 'react';
import stl from './Nav.module.scss'
import { Link} from "react-scroll";


const Nav = () => {
    return (
        <div className={stl.wraper}>
            <div className={stl.container}>
                <Link className={stl.link}  to={'home'} smooth={true} duration={700}>Home</Link>
                <Link className={stl.link} to={'main'} smooth={true} duration={700}>About</Link>
                <Link className={stl.link}  to={'skills'} smooth={true} duration={700}>Skills</Link>
                <Link className={stl.link}  to={'works'} smooth={true} duration={700}>Works</Link>
                <Link className={stl.link}  to={'contacts'} smooth={true} duration={700}>Contacts</Link>
            </div>
        </div>
    )
        ;
};

export default Nav;