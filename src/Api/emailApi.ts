import axios from "axios";
import {FormikErrorType} from "../Contacts/Contacts";

export const emailSend = (values: FormikErrorType) => {
  axios.post('http://localhost:3001/sendmail', values)
    .then((res) => {
      alert('Sent')
      console.log(res)
    })
}