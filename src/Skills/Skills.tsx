import React from 'react';
import stl from "../Skills/Skills.module.css";
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title} >Skills</h2>
                <div className={stl.skillsContainer}>
                    <Skill skillName = {"React"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis nulla numquam possimus voluptate.' }/>
                    <Skill skillName = {"NodeJS"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aliquid animi exercitationem explicabo laborum'}/>
                    <Skill skillName = {"CSS"} discription = {'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;