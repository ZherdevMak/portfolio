import React from 'react';
import stl from './Main.module.scss'
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";
import myPhoto from '../Assets/Images/myPhoto.jpg'

const Main = () => {
    return (
        <div>
            <div id={"main"} className={stl.wrapper}>
                <div className={stl.container}>
                    <div className={stl.photoContainer}>
                        <img className={stl.photo} src={myPhoto} alt="My photografy"/>
                    </div>
                    <div className={stl.textAboutMe}>
                        <h3 className={stl.greeting}>HELLO, THAT'S ME!</h3>
                        <h2 className={stl.nameText}>Zherdev <br/> Maxim.</h2>
                        <p className={stl.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur dolorem illum in
                            quidem reprehenderit rerum, saepe vel voluptate voluptatum.</p>
                        <p className={stl.infoText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aspernatur beatae
                            cum debitis dolore, doloremque earum eius error eveniet impedit ipsum iure minima odio omnis
                            pariatur, perferendis, quas quidem ratione repellat repellendus similique vel.</p>
                        <div className={stl.socialLinksContainer}>
                            <button className={stl.socialLinkButton}>Facebook</button>
                            <button className={stl.socialLinkButton}>Instagram</button>
                            <button className={stl.socialLinkButton}>VK</button>
                        </div>
                    </div>

                </div>
            </div>
            <Skills/>
            <Projects/>
            <Contacts/>
        </div>
    )
        ;
};

export default Main;