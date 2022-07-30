import React from 'react';
import stl from "./Contacts.module.scss";

const Contacts = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title}>say hello!</h2>
                <div className={stl.formContainer}>
                    <form className={stl.form} action="">
                        <input className={stl.input} type="text" placeholder={"Your name"}/>
                        <input className={stl.input} type="text" placeholder={"Your email"}/>
                        <input className={stl.input} type="text" placeholder={"Your subject"}/>
                        <textarea className={stl.textarea} placeholder={"Your message"}/>
                    </form>
                </div>
                <button className={stl.sendButton}>Send message</button>

            </div>
        </div>
    );
};

export default Contacts;