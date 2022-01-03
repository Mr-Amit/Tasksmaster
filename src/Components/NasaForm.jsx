import React, { useState, useEffect } from 'react';

function NasaForm() {
    const [openModal, setModal] = useState(false);
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
                <button className="btn-1">Preview</button>
                <button className="btn-2 submit-button">Subscribe</button>
            </div>

        </div>
        

     );
}

export default NasaForm;