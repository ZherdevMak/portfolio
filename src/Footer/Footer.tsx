import React from 'react';
import stl from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title} >Zherdev Maxim</h2>
                <div className={stl.NavContainer}></div>
                <div className={stl.articleContainer}>
                    <article>@2022 All rights reserved</article>
                </div>
            </div>
        </div>
    );
};

export default Footer;