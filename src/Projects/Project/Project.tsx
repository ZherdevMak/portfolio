import React from 'react';
import stl from "./Project.module.css";
import image from '../../Components/Images/comp.jpg'

type WorkPropsType = {
    ProjectName: string
    discription: string
}
const Project = (props: WorkPropsType) => {
    return (
        <div className={stl.container}>
            <div className={stl.imageContainer}>
                <div className={stl.projectOverlay}></div>
                <img className={stl.image} src={image}/>
                <div className={stl.projectInfo}>
                <h3 className={stl.text}>{props.ProjectName}</h3>
                </div>
                {/*<button>Explore</button>*/}
            </div>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Project;