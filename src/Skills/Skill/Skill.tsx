import React from 'react';
import stl from "./Skill.module.css";
type SkillPropsType = {
    skillName: string
    discription: string
}
const Skill = (props:SkillPropsType) => {
    return (
        <div className={stl.container}>
            <div className={stl.icon}></div>
            <div className={stl.text}>{props.skillName}</div>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Skill;