import axios from "axios";
import {FormikErrorType} from "../Contacts/Contacts";

export const emailSend = (values: FormikErrorType) => {
  axios.post('https://portfolio-mailer-zherdev.herokuapp.com/sendmail', values)
    .then((res) => {
      alert('Your message has been sent! Thank You!')
      console.log(res)
    })
}