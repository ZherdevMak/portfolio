import React from 'react';
import stl from "./Work.module.css";
type WorkPropsType = {
    WorkName: string
    discription: string
}
const Work = (props:WorkPropsType) => {
    return (
        <div className={stl.container}>
            <div className={stl.icon}></div>
            <div className={stl.text}>{props.WorkName}</div>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Work;