import React from 'react';
import stl from "../Works/Works.module.css";
import Work from "./Work/Work";

const Works = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title} >Skills</h2>
                <div className={stl.skillsContainer}>
                    <Work WorkName = {"React"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis nulla numquam possimus voluptate.' }/>
                    <Work WorkName = {"NodeJS"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aliquid animi exercitationem explicabo laborum'}/>
                    <Work WorkName = {"CSS"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;