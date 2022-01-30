import React, { useState, useEffect } from 'react';
import '../Stylesheets/modal.css';

function SubmitModal( { setModal, data } ) {

    const [submitString, setSubmit] = useState('SUBMIT')
    const [email, setEmail] = useState('')

    const handleMailChange = event => {
      setEmail(event.target.value)
    };

    const handleSubmit = (event) => {
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

    let displayText;
    if(data.type === "NewsForm"){
      displayText = "You want News on " + (data.newsAbout || 'Anything(Default)') + " at " +  (data.wordLimit || '50(Default)') + " word limit?"
    }
    else if(data.type === "NasaForm"){
      displayText = "Get daily Deep Space Images by Nasa?"
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
                <input onChange={handleMailChange} className="form-fields modal-fields" type="text" id="mail" name="mail"/>
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