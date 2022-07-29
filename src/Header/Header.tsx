import React from 'react'
import stl from './Header.module.scss'
import Nav from "../Nav/Nav";

const Header = () => {
    const [scroll, setScroll] = React.useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const headerClass = (scroll < 350) ? stl.header : `${stl.header} + ${stl.minHeader}`

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={headerClass}>
            <Nav/>
        </div>
    );
};

export default Header;