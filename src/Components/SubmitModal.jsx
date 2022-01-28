import React, { useState, useEffect } from 'react';
import '../Stylesheets/modal.css';

function SubmitModal( { setModal } ) {
    return ( 
        <div className='modal-background'>
            <div className='header-button'>
                <button className='btn btn-danger btn-sm ' onClick={() => setModal(false)}>X</button>
            </div>
            <div className='modal-title'>
                {/* Subscribe to (News) on (Thing) at (WordLimit)? */}
            </div>

            {/* <div className='dw-div'>
                <input type="checkbox" name="switch" id="switch"/>
                <label className='radio-label' for="switch"></label>
            </div> */}
            In Development.
        </div>
    );
}

export default SubmitModal;