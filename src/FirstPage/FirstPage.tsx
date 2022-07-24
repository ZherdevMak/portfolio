import React from 'react';
import stl from './FirstPage.module.scss'
import Header from "../Header/Header"
import bg from '../Assets/Images/bg.jpg'

const BackImg = {
    backgroundImage: `url(${bg})`
}
const FirstPage = () => {

    return (
        <div>
            <Header/>
            <div style={BackImg} className={stl.wrapper}>
                <div className={stl.container}>
                    <div >
                        <h1 className={stl.text}>Development is life</h1>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default FirstPage;