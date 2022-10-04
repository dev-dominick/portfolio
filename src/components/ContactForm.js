import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { checkEmail, checkName, checkMessage } from '../utils/helpers';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
const REACT_APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
const REACT_APP_YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID
const REACT_APP_YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY

const contactModalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 150,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: 'rgb(160,160,160)',
    borderRadius: '2rem'

};

export default function ContactForm() {

    const form = useRef();

    const [user_name, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [open, setOpen] = React.useState(false);

    const modalText = [
        "Please complete the form to send me a message!",
        "Please enter your name!",
        "Please enter your message!",
        "Message recieved!"
    ];

    const handleEmpty = () => {
        setOpen(true);
        setErrorMessage(modalText[0]);
    };

    const handleNoName = () => {
        setOpen(true);
        setErrorMessage(modalText[1]);
    };

    const handleNoMessage = () => {
        setOpen(true);
        setErrorMessage(modalText[2]);
    };

    const handleConfirmation = () => {
        setOpen(true);
        setErrorMessage(modalText[3]);
    };

    const handleClose = () => setOpen(false);



    const clearForm = () => {
        setEmail("");
        setMessage("");
        setUserName("");
    }


    const sendEmail = (e) => {
        e.preventDefault();
        console.log('logging e');
        console.log('                    ');
        console.log(e)
        console.log('                    ');

        if (!checkEmail(email) && !checkName(user_name)) {
            handleEmpty()
            return;
        } else if (!checkName(user_name)) {
            handleNoName();
            return;
        } else if (!checkMessage(message)) {
            handleNoMessage();
            return;
        }  else {
            emailjs.sendForm(
                REACT_APP_YOUR_SERVICE_ID,
                REACT_APP_YOUR_TEMPLATE_ID, form.current,
                REACT_APP_YOUR_PUBLIC_KEY
            )

                .then((result) => {
                    clearForm();
                    handleConfirmation();
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                }
                );
        }
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

            <input
                className='submitBtn'
                type="submit"
                value="Send Message"

            />

            {errorMessage && (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={contactModalBoxStyle}>
                        <div className='closeBtn' onClick={ handleClose }>< CloseIcon /></div>
                        <div className='contactModalText'>
                            <h4 className="error-text">{errorMessage}</h4>
                        </div>
                    </Box>
                </Modal>
            )}

        </form>

    );
};