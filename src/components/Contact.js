import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_offdx2r', 'template_pgmt5xj', e.target, 'user_yeDGiqKuNO4scyEGPOLB5')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
  <>

    <div class="row center-align">

    <form class="col s6 contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
      <div class="row">
        <div class="input-field col s6">
          <input type="text" name="from_name" class="validate"/>
          <label for="first_name">Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input type="email" name="from_email" id="email" class="validate"/>
          <label for="password">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
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
    </>
  );
}
