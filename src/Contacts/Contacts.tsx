import React from 'react';
import stl from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title}>Contacts</h2>
                <div className={stl.formContainer}>
                    <form className={stl.form} action="">
                        <input className={stl.input1} type="text"/>
                        <input className={stl.input2} type="text"/>
                        <textarea className={stl.textarea}/>
                    </form>
                </div>
                <div className={stl.buttonContainer}>
                    <button className={stl.sendButton}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;