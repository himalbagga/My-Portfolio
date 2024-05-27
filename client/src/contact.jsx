/* File: contact.jsx
Student Name: Himal Bagga
Student Id: 301340155
Date: 26 May, 2024 */

export default function Contact() {
        return (
          <>
            <p>Contact Me</p>
            <p>I would love to hear from you. Here are some of the ways to contact.</p>
            <p>Email: <a href="mailto:baggahimal5@gmail.com">baggahimal5@gmail.com</a>
            </p>
            <p>Phone: <a href="tel:+14376604352">+1 437 660-4352</a></p>
            <p>Linkedin: <a href="https://www.linkedin.com/in/himal-bagga-30807525b/">@HimalBagga</a></p>
            <br />
            <br />
            <p>Send a Message</p>
            <form id="form" action="/">
                <label id="lbnm" htmlFor="name">Name: </label>
                <input className="input" type="text" />
                <br />
                <label id="lbem" htmlFor="email">Email: </label>
                <input className="input" type= "email" />
                <br />
                <label id="lbms" htmlFor="message">Message: </label>
                <textarea id="lbtxt"  name="message" rows={4}>Please enter your message...</textarea>
                <br />
            
                <input type="submit" value="Send Message"/>
            </form>
            

          </>
        );
      }
    