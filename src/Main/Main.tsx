import React from 'react';
import stl from './Main.module.css'
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";

const Main = () => {
    return (
        <div>
            <div className={stl.wrapper}>
                <div className={stl.container}>
                    <div className={stl.text}>
                        <div>Hi,there!</div>
                        <h1>I am Zherdev Maxim</h1>
                        <div>a Web developer</div>
                    </div>
                    <div className={stl.photo}>

                    </div>
                </div>
            </div>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    )
        ;
};

export default Main;