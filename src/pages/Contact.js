import React from 'react';
import '../styles/Contact.css';

function Contact() {

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <p className="text">
            Contact us Through this form and we will be in touch
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>Emmabodavägen 20, 382 45 Nybro, Sweden</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i>
              <p>007Museum@Telia.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>
              <p>+46 481 129 60</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" placeholder="Name" />
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" placeholder="Email" />
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" placeholder="Phone" />
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input" placeholder="Message"></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
