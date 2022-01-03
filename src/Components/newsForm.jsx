import React, { useState, useEffect } from 'react';

import SubmitModal from './SubmitModal';

function NewsForm() {

    const [openModal, setModal] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log("event");
    }
 
    return ( 
        
        
        <div>
            <div className="form-title">News For you</div>
            <p className="summary">Tell us <br /> Anyone, Any Place, Any Event <br /> You want updates on...</p>
            <form className="whole-form"  onSubmit={onSubmit}>
                <h2>About</h2>
                <div>
                <input className="form-fields" type="text" id="about" name="about"/>
                <h6 className='news-h6'>If multiple things, seperate each with a comma.</h6>
                </div>
                <label className="form-fields" htmlFor="wordlimit">Word Limit</label>

                <div>
                <input className="form-fields news-wordlimit" type="text" id="wordlimit" name="wordlimit"/>
                <h6>Insert new word limit else leave empty</h6>
                </div>
                <input type="submit" className="btn-1 submit-button" onClick={() => setModal(true)} name="submit" value="SUBSCRIBE"/>    
            </form>
            {openModal && <SubmitModal />}            
        </div>
    );
}

export default NewsForm;