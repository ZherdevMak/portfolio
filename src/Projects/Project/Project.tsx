import React from 'react';
import stl from "./Project.module.css";

type WorkPropsType = {
    ProjectName: string
    discription: string
}
const Project = (props: WorkPropsType) => {
    return (
        <div className={stl.container}>
            <div className={stl.backgroundContainer}>
                <button>Explore</button>
            </div>
            <h3 className={stl.text}>{props.ProjectName}</h3>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Project;