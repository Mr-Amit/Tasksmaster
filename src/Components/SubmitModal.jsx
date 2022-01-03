import React, { useState, useEffect } from 'react';

function SubmitModal() {
    return ( 
        <div className='modal-background'>
            <div className='header-button'>
                <button className='btn btn-danger btn-sm'>X</button>
            </div>
            <div className='modal-title'>
                Subscribe to (News) on (Thing) at (WordLimit)?
            </div>
        </div>
    );
}

export default SubmitModal;