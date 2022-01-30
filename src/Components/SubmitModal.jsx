import React, { useState, useEffect } from 'react';
import '../Stylesheets/modal.css';
import validator from 'validator'

function SubmitModal( { setModal, data } ) {

    const [submitString, setSubmit] = useState('SUBMIT')
    const [emailError, setEmailError] = useState('Enter a valid Email')
    const [email, setEmail] = useState('')

    const validateEmail = (e) => {
      var emailget = e.target.value
      setEmail(emailget)
      if (validator.isEmail(emailget)) {
        setEmailError('')
        
      } else {
        setEmailError('Enter a valid Email')
      }
    }

    const handleMailChange = event => {
      setEmail(event.target.value)
      
    };

    const handleSubmit = (event) => {
      if(emailError !== ''){
        if(email === ''){
          alert("Email Field is Empty")
        } else {

          alert(email + " is not a valid email address")
        }
      } else {
        data.email = email;
        setSubmit("SUBSCRIBED")
        // console.log(data);

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          
          body:  JSON.stringify(data)
        };
        fetch('http://127.0.0.1:8000/', requestOptions)
            .then(response => console.log("IN REACT" + response));
      }
      
    }

    let displayText;
    if(data.type === "NewsForm"){
      displayText = "Subscribe to News on " + (data.newsAbout || 'Anything(Default)') + " at " +  (data.wordLimit || '50(Default)') + " word limit?"
    }
    else if(data.type === "NasaForm"){
      displayText = "Subscribe to daily Deep Space Images by Nasa?"
    }
    else if(data.type === "AstrologyForm"){
      displayText = "Get Daily Astrology For " + (data.zodiac) + "."
    }
    else if(data.type === "ProductsForm"){
      displayText = "Sorry, Shop Alerts is not available right now, as scraping Amazon requires Permission."
    }
    return ( 
        <div className='modal-background'>
          <div className='header-button'>
              <button className='btn btn-danger btn-sm ' onClick={() => setModal(false)}>X</button>
          </div>
          <div className='modal-flex'>

            <div className='modal-title'>              
              {displayText}                
            </div>

            <div className='modal-email-submit'>
              <div className='modal-email'>
                <label className="form-fields modal-fields" htmlFor="mail">E-Mail</label>
                <input onChange={(e) => validateEmail(e)} className="form-fields modal-fields" type="email" value={email} id="mail" name="mail"/>
                
                <span className='span-modal'> {emailError} </span>
              </div>           
              
              <div>
                <input onClick={handleSubmit} type="submit" className="btn-2 submit-button modal-submit" name="submit" value={submitString}/>
              </div>
            </div>
              

          </div>
          
                        
        </div>
    );
}

export default SubmitModal;