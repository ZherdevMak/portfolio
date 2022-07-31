import React from 'react';
import stl from "./Footer.module.scss";
import mapMarker from '../Assets/Images/mapMarker.png'
import mobileMarker from '../Assets/Images/mobileMarker.png'
import wrenchMarker from '../Assets/Images/wrenchMarker.png'
import letterMarker from '../Assets/Images/letterMarker.png'

const Footer = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                {/*<h2 className={stl.title} >Zherdev Maxim</h2>*/}
                <div className={stl.NavContainer}>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage} src={mapMarker} alt=""/>
                        <h2>Text</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage2} src={mobileMarker} alt=""/>
                        <h2>Text</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage3} src={wrenchMarker} alt=""/>
                        <h2>Text</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage3} src={letterMarker} alt=""/>
                        <h2>Text</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className={stl.articleContainer}>
                    <article>@2022 All rights reserved</article>
                </div>
            </div>
        </div>
    );
};

export default Footer;