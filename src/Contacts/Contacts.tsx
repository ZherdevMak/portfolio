import React from 'react';
import stl from "./Contacts.module.scss";
import {useFormik} from "formik";

type FormikErrorType = {
    name?:string,
    email?: string,
    subject?: string,
    message?: string,
}
const Contacts = () => {
    const formik = useFormik({
        initialValues: {
            name:'',
            email: '',
            subject: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: (values) => {
            formik.resetForm()
        },
    })



    return (
        <div id={'contacts'} className={stl.wrapper}>
            <div className={stl.container}>
                <h2 className={stl.title}>say hello!</h2>
                <div className={stl.formContainer}>
                    <form className={stl.form} onSubmit={formik.handleSubmit}>
                        <input className={stl.input} type="text" placeholder={"Your name"}/>
                        <input className={stl.input} type="text" placeholder={"Your e-mail"}/>
                        <input className={stl.input} type="text" placeholder={"Your subject"}/>
                        <textarea className={stl.textarea} placeholder={"Your message"}/>
                        <button type={'submit'} className={stl.sendButton}>Send message</button>
                    </form>
                </div>


            </div>
        </div>
    );
}
export default Contacts;