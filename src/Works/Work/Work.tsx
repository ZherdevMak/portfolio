import React from 'react';
import stl from "./Work.module.css";
import workImage from '../../Images/workImg.jpg'
type WorkPropsType = {
    WorkName: string
    discription: string
}
const Work = (props:WorkPropsType) => {
    return (
        <div className={stl.container}>
            <img src={workImage} className={stl.image} alt={'Example of my work'}></img>
            <h3 className={stl.text}>{props.WorkName}</h3>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Work;