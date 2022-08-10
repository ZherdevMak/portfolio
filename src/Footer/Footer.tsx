import React from 'react';
import stl from "./Footer.module.scss";
import mapMarker from '../Assets/Images/mapMarker.png'
import mobileMarker from '../Assets/Images/mobileMarker.png'
import wrenchMarker from '../Assets/Images/wrenchMarker.png'
import letterMarker from '../Assets/Images/letterMarker.png'
import facebookIcon from '../Assets/Images/faceIcon.png'
import vkIcon from '../Assets/Images/vkIcon.png'
import instaIcon from '../Assets/Images/instaIcon.png'

const Footer = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <div className={stl.NavContainer}>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage} src={mapMarker} alt="MapIcon"/>
                        <h2 className={stl.NavText}>Visit my office</h2>
                        <p className={stl.NavDiscription}>Russia, Rostov-on-Don, str.Sadovaya 44, aprt.32</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage2} src={mobileMarker} alt="MobileIcon"/>
                        <h2 className={stl.NavText}>Call me</h2>
                        <p className={stl.NavDiscription}>+79689471982</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage3} src={wrenchMarker} alt="WrenchIcon"/>
                        <h2 className={stl.NavText}>Work</h2>
                        <p className={stl.NavDiscription}>Monday to friday</p>
                    </div>
                    <div className={stl.NavElement}>
                        <img className={stl.NavImage3} src={letterMarker} alt="MailIcon"/>
                        <h2 className={stl.NavText}>Email me</h2>
                        <p className={stl.NavDiscription}>ppmaxjer@yandex.ru</p>
                    </div>
                </div>
                <div className={stl.articleContainer}>
                    <div className={stl.IconContainer}>
                        <a href={'https://www.facebook.com/ppmaxjer'}><img className={stl.mediaIcon1} src={facebookIcon} alt=""/></a>
                        <a href={'https://vk.com/id146583412'}><img className={stl.mediaIcon} src={vkIcon} alt=""/></a>
                        <a href={'https://www.instagram.com/ppmaxjer'}><img className={stl.mediaIcon} src={instaIcon} alt=""/></a>
                    </div>
                    <article className={stl.articleText}>@2022 All rights reserved</article>
                </div>
            </div>
        </div>
    );
};

export default Footer;