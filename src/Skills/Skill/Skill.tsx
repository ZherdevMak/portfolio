import React from 'react';
import stl from "./Skill.module.scss";

type SkillPropsType = {
    skillName: string
    discription: string
    logo:string
}
const Skill = (props: SkillPropsType) => {
    return (
        <div className={stl.container}>
            <div className={stl.icon}>
                <img className={stl.iconImage} src={props.logo} alt=""/>
            </div>
            <div className={stl.text}>{props.skillName}</div>
            <div className={stl.description}>{props.discription}</div>
        </div>
    );
};

export default Skill;