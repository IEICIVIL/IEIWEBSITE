import React from "react";
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import { useForm, ValidationError } from '@formspree/react';


function ContactUs(){
     const [state, handleSubmit] = useForm("xwkaklky");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return(
        <div id="contact" className="contactus" >
            <h1 className="text-uppercase text-custum text-gray">Contact us</h1>
            <div className="information">
                <div className="address">
                        <RoomOutlinedIcon/>
                        <h3 className="text-gray text-contact">Address</h3>
                        <p>DEPARTMENT OF CIVIL ENGINEERING
                            BIT MESRA
                            RANCHI - 835215
                        </p>
                </div>
                <div className="phoneNumber">
                    <PhoneInTalkOutlinedIcon/>
                    <h3 className="text-gray text-contact">Call us</h3>
                    <p><a href="tel:99349 65349"><span>Rituraj Raushan :-</span>+91 99349 65349</a><br/>
                        <a href="tel:7656898989"><span>Muskan Gupta :-</span>+91 7656898989</a>
                    </p>

                </div>
                <div className="email ">
                   <MailOutlineSharpIcon/>
                    <h3 className="text-gray text-contact">Email/Message Us</h3>
                    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="email">
       Your Message 
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
                </div>
            </div>
        </div>
    )
        
    
    
}

export default ContactUs