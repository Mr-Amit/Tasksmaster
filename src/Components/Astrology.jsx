import React, { useState, useEffect } from 'react';
import SubmitModal from './SubmitModal';

function AstrologyForm() {
    const [openModal, setModal] = useState(false);
    function openingModal(){
        setTimeout(() => setModal(true), 2000)
    }

    return ( 

        <div>
            <div className="form-title">Astrology</div>
            <div className="zodiac-container">
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Aries, March 21 - April 19">♈︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Taurus, April 20 - May 20">♉︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Gemini, May 21 - June 20">♊︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Cancer, June 21 - July 22">♋︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Leo, July 23 - August 22">♌︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Virgo, August 23 - September 22">♍︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Libra, September 23 - October 22">♎︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Scorpio, October 23 - November 21">♏︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Sagittarius, November 22 - December 21">♐︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Capricorn, December 22 - January 19">♑︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Aquarius, January 20 - February 18">♒︎</button>
            <button onClick={openingModal} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Pisces, February 19 - March 20">♓︎</button>
            </div>
            <p className="summary">Click on your Zodiac, Get your horoscope</p>

            {openModal && <SubmitModal setModal={setModal}/>} 
      </div>

     );
}

export default AstrologyForm;