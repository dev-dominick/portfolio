// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

// export default function Contact() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         "& > :not(style)": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="First Name" variant="outlined" />
//       <TextField id="outlined-basic" label="Last Name" variant="outlined" />
//       <TextField id="outlined-basic" label="Email" variant="outlined" />

//     </Box>
//   );
// }

import React, { useState } from "react";
import "./contactMe.css";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(name) || !email) {
      setErrorMessage("Please enter a valid email address");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    // if (!checkPassword(password)) {
    //   setErrorMessage(
    //     `Choose a more secure password for the account: ${userName}`
    //   );
    //   return;
    // }
    // alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail("");
    setMessage("");
    setName("");
  };

  return (
    <div className="formContainer">
      <form className="form">
        <input
          className="nameBox"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Full Name"
        />
        <input
          className="emailBox"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          className="messageBox"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message..."
        />
        <button className="submitBtn" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

