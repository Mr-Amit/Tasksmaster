import React, { useState, useEffect } from 'react';

import SubmitModal from './SubmitModal';


function NasaForm() {
    const [openModal, setModal] = useState(false);
    const [sendData, setData] = useState({"type" : "NasaForm"})
    
    return ( 

        <div className="space-div">
            <div className="nasa-title">
                <div className="form-title">
                    Space by 
                </div>
                <img className="nasa-icon" src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" 
                    alt="Nasa-Icon"/>
            </div>
            <p className="summary">With Great Camera Comes Great Responsiblity. </p>

            <p className="summary"> Nasa provides a beautiful picture from space, with a short piece of literature</p>

            <div className="two-buttons">
            <a href="https://nasapreview.htmlsave.net/" target="_blank">
                <button className="btn-1">Preview</button>
            </a>
                
                <button className="btn-2 submit-button" onClick={() => setModal(true)} >Subscribe</button>
            </div>
            {openModal && <SubmitModal setModal={setModal} data={sendData}/>} 
        </div>
        

     );
}

export default NasaForm;