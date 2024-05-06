import React from 'react'
import '../styles/Contact.css';
function Contact() {
  return (
    <div>
      <div className='contactus'>
        <div>
          <h1>Contact us</h1>
          <h3>Email : 007museum@Telia.com</h3>
        </div>
        <div className='form-group'>
          <h1>Lets</h1>
          <h4>send us a request through the form below
            and we will get back to you
          </h4>
          <form>
            <label>
              
              <input type='text' name='name' placeholder='Name'></input>
            </label>
            <label>
              
              <input type='text' name='Email' placeholder='Email'></input>
            </label>
            <label>

              <input type='text' name='Subject' placeholder='Subject'></input>
            </label>
            <label>
            <textarea name='Text' placeholder='Text'></textarea>
            </label>
            <input type='submit' value='submit'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
