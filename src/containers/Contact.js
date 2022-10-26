import React from "react";
import emailjs from "emailjs-com";
import contactImg from "../images/g47443.png";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
              alert("Message Sent!")
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <div className="contact-container" id="contact">
            <img className="contact-image" src={contactImg}/>
            <h1 className="contact-title">Contact Me</h1>
            <div className="form-container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <input className="name-input" type='text' placeholder="Name" name="name"/>
                    <input className="email-input" type='email' placeholder="Email" name="email"/>
                    <textarea className="message-area" placeholder="Message" name="message"/>
                    <input className="submit-btn" type='submit' value="Submit"/>
                </form>
            </div>
        </div>
    );
}

export default Contact;