import React, {useState, useEffect } from 'react';

import SubmitModal from './SubmitModal';
// import './new-slider.css';
// import ScriptTag from 'react-script-tag';


function ProductsForm() {

    const [openModal, setModal] = useState(false);

    useEffect(() => {
        const settings = {
            fill: "#42FBF2",
            background: "#2c3e50"
        };
        
          // First find all our sliders
          // The rateing is here
        const sliders = document.querySelectorAll(".range-slider");
        Array.prototype.forEach.call(sliders, (slider) => {
        
            slider.querySelector("input").addEventListener("input", (event) => {
        
                if(slider.querySelector(".range-slider__range").max == "50"){
                    if(event.target.value != 0 && event.target.value != 50){
                        slider.querySelector("span").innerHTML = (event.target.value)/10 + "+";
                    }
                    else{
                        slider.querySelector("span").innerHTML = (event.target.value)/10
                    }
                }
                else{
                    if(event.target.value != 0){
                        slider.querySelector("span").innerHTML = (event.target.value) + "+";
                    }
                    else{
                        slider.querySelector("span").innerHTML = (event.target.value)
                    }
                }
                applyFill(event.target);
            });
            
            applyFill(slider.querySelector("input"));
        });
        
        
        function applyFill(slider) {
            
            const percentage =
                (100 * (slider.value - slider.min)) / (slider.max - slider.min);
            
            const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
                settings.background
            } ${percentage + 0.1}%)`;
            slider.style.background = bg;
        }
      }, []);
    
    return ( 
        
        <div>
            <div className="form-title">Shopping Alerts</div>
            <form className="whole-form">
                <label className="form-fields" htmlFor="productname">Product</label>
                <input className="form-fields" type="text" id="productname" name="productname"/>
                <label className="form-fields" htmlFor="price">Price</label>
                <input className="form-fields" type="text" id="price" name="price"/>

                <label className="form-fields" htmlFor="ratings">Rating</label>
                
                <div className="range-slider">
                <input className="range-slider__range" type="range" defaultValue="25" min="0" max="50"/>
                <span className="range-slider__value">2.5</span>
                </div>
                
                <label className="form-fields" htmlFor="ratings">No. of Reviews</label>
                
                <div className="range-slider">
                <input className="range-slider__range" type="range" defaultValue="50" min="0" max="1000"/>
                <span className="range-slider__value">50</span>
                </div>
                
                <input type="submit" className="btn-1 submit-button" onClick={() => setModal(true)} name="submit" value="SUBMIT"/>
                {/* <ScriptTag src='slider.js'/> */}
            </form>
            {openModal && <SubmitModal setModal={setModal}/>}  
        </div>
    );
}

export default ProductsForm;
