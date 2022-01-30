import React, { useState, useEffect } from 'react';
import SubmitModal from './SubmitModal';

function AstrologyForm() {
    const [openModal, setModal] = useState(false);
    const [sendData, setData] = useState({})
    function openingModal(){
        setTimeout(() => setModal(true), 2000)
        
    }

    return ( 

        <div>
            <div className="form-title">Astrology</div>
            <div className="zodiac-container">
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Aries"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Aries, March 21 - April 19">♈︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Taurus"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Taurus, April 20 - May 20">♉︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Gemini"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Gemini, May 21 - June 20">♊︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Cancer"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Cancer, June 21 - July 22">♋︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Leo"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Leo, July 23 - August 22">♌︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Virgo"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Virgo, August 23 - September 22">♍︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Libra"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Libra, September 23 - October 22">♎︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Scorpio"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Scorpio, October 23 - November 21">♏︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Sagittarius"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Sagittarius, November 22 - December 21">♐︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Capricorn"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Capricorn, December 22 - January 19">♑︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Aquarius"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Aquarius, January 20 - February 18">♒︎</button>
            <button onClick={() => {
                setTimeout(() => setModal(true), 2000);
                setData({"type":"AstrologyForm", "zodiac": "Pisces"})
            }} className="zodiac-signs zodiac-tooltip" data-toggle="tooltip" data-placement="top" title="Pisces, February 19 - March 20">♓︎</button>
            </div>
            <p className="summary">Click on your Zodiac, Get your horoscope</p>

            {openModal && <SubmitModal setModal={setModal} data={sendData}/>} 
      </div>

     );
}

export default AstrologyForm;