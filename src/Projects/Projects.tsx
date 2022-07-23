import React from 'react';
import stl from "./Projects.module.scss";
import Project from "./Project/Project";

export const Projects = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title}>Projects</h2>
                <div className={stl.skillsContainer}>
                    <Project ProjectName={"Samurai-Way"}
                             discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nobis nulla numquam possimus voluptate.'}/>
                    <Project ProjectName={"TodoList"}
                             discription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Adipisci aliquid animi exercitationem explicabo laborum'}/>
                </div>
            </div>
        </div>
    );
};
export default Projects