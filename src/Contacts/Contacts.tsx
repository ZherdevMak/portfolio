import React from 'react';
import stl from "./Contacts.module.scss";
import {useFormik} from "formik";

type FormikErrorType = {
  name?: string,
  email?: string,
  subject?: string,
  message?: string,
}
const Contacts = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.email) {
        errors.email = 'You have to sign Your E-mail'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
      }
      if (!values.name) {
        errors.name = 'Please, write Your name'
      }
      if (!values.message) {
        errors.message = 'Live Your message'}
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
            <input className={stl.input} type="text" placeholder={"Your name"}
                   name='name'
                   onChange={formik.handleChange}
                   value={formik.values.name}
                   onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>}
            <input className={stl.input} type="email" placeholder={"Your e-mail"}
                   name='email'
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   value={formik.values.email}/>
            {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>}
            <input className={stl.input} type="text" placeholder={"Your subject"}
                   name='subject'
                   onBlur={formik.handleBlur}
                   onChange={formik.handleChange}
                   value={formik.values.subject}/>
            <textarea className={stl.textarea} placeholder={"Your message"}
                      name='message'
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      onBlur={formik.handleBlur}/>
            {formik.errors.message && formik.touched.message && <div>{formik.errors.message}</div>}
            <button type={'submit'} className={stl.sendButton}>Send message</button>
          </form>
        </div>


      </div>
    </div>
  );
}
export default Contacts;