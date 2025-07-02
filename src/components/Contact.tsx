import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const hasErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };

    setNameError(hasErrors.name);
    setEmailError(hasErrors.email);
    setMessageError(hasErrors.message);

    if (hasErrors.name || hasErrors.email || hasErrors.message) return;

    try {
      const response = await fetch('https://0qsd0f4al2.execute-api.il-central-1.amazonaws.com/default/sendContactFormEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send the message.");
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                fullWidth
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                fullWidth
              />
            </div>

            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              fullWidth
            />

            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
