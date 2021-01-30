import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault(); 

    emailjs.sendForm('service_offdx2r', 'template_pgmt5xj', e.target, 'user_yeDGiqKuNO4scyEGPOLB5')
      .then((result) => {
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
  <>
<div className="container center-align">
<h1 className='page-title'>let's chat</h1>
    <div class="row center-align">
    <form class="contact-form sm" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
      <div class=" center-align row">
        <div class="center-align input-field col s12">
          <input type="text" name="from_name" class="validate"/>
          <label for="first_name">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="email" name="from_email" id="email" class="validate"/>
          <label for="password">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" name="message"></textarea>
            <label for="textarea1">Message</label>
        </div>
        </div>
        <input className='buttons btn' type="submit" value="Send" />
    </form>
    
  </div>
      
    {/* <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className='buttons btn' type="submit" value="Send" />
    </form> */}
    </div>
    </>
  );
}
