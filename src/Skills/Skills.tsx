import React from 'react';
import stl from "./Skills.module.scss";
import Skill from "./Skill/Skill";
import ReactLogo from '../Assets/Images/pngaaa.com-2508011.png'
import nodeLogo from '../Assets/Images/nodeLogo.png'
import cssLogo from '../Assets/Images/cssLogo.png'

const Skills = () => {
    return (
        <div id={'skills'} className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title}>Skills.</h2>
                <div className={stl.skillsContainer}>
                    <Skill skillName={"React"} logo = {ReactLogo}
                           discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis nulla numquam possimus voluptate.'}/>
                    <Skill skillName={"NodeJS"} logo = {nodeLogo}
                           discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aliquid animi exercitationem explicabo laborum'}/>
                    <Skill skillName={"CSS"} logo = {cssLogo} discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;