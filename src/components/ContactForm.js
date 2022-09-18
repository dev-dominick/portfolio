import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
const REACT_APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
const REACT_APP_YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
const REACT_APP_YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY



export default function ContactForm() {

    const form = useRef();

    const [user_name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");

    const clearForm = () => {
        setEmail("");
        setMessage("");
        setUserName("");
    }


    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e)

        emailjs.sendForm(REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, form.current, REACT_APP_YOUR_PUBLIC_KEY)
            .then((result) => {
                clearForm();
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }
            );
    };

    return (
        <form className='formBox' ref={form} onSubmit={sendEmail}>

            {/* <label>Name</label> */}

            <div className='inputRow'>

                <input
                    type="text"
                    name="user_name"
                    className="nameBox"
                    value={user_name}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Full Name"
                />

                <input
                    type="email"
                    name="user_email"
                    className="emailBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            
            <textarea
                type="text"
                name="message"
                className="messageBox"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
            />

            <input className='submitBtn' type="submit" value="Send Message" />

            {/* {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )} */}

        </form>

    );
};