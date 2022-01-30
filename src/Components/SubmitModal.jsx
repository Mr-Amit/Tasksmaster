import React, { useState, useEffect } from 'react';
import '../Stylesheets/modal.css';

function SubmitModal( { setModal, data } ) {
    let displayText;
    if(data.type === "NewsForm"){
      displayText = "You would like to get News on " + (data.newsAbout || 'Anything (Default)') + " at " +  (data.wordLimit || '50 (Default)') + " word limit?"
    }
    else if(data.type === "NasaForm"){
      displayText = "NasaForm"
    }
    else if(data.type === "AstrologyForm"){
      displayText = "AstrologyForm " + (data.zodiac)
    }
    else{
      displayText = "ProductsForm"
    }
    return ( 
        <div className='modal-background'>
            <div className='header-button'>
                <button className='btn btn-danger btn-sm ' onClick={() => setModal(false)}>X</button>
            </div>
            <div className='modal-title'>
                {/* Subscribe to (News) on (Thing) at (WordLimit)? */}
            </div>
            {displayText}
            {/* <div className='dw-div'>
                <input type="checkbox" name="switch" id="switch"/>
                <label className='radio-label' for="switch"></label>
            </div> */}
            In Development.
        </div>
    );
}

export default SubmitModal;