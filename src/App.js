// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react';


import './Stylesheets/App.css';
import './Stylesheets/new-slider.css';
import './Stylesheets/modal.css';

import ProductsForm from './Components/productsForm';
import NewsForm from './Components/newsForm';
import AstrologyForm from './Components/Astrology';
import NasaForm from './Components/NasaForm';

class App extends React.Component {

  state = {
    SelectedForm : "NewsForm"
  };
  
  render() { 
    
    let formdiv;
    if(this.state.SelectedForm === "NewsForm"){
      formdiv = <NewsForm/>
    }
    else if(this.state.SelectedForm === "NasaForm"){
      formdiv = <NasaForm/>
    }
    else if(this.state.SelectedForm === "AstrologyForm"){
      formdiv = <AstrologyForm/>
    }
    else{
      formdiv = <ProductsForm/>
    }

    return (

      <div className="App">
    
      <div className="main-container">

        <div className="buttons-div">

          <button className="btn-1" onClick={() => this.setState({SelectedForm: "ProductsForm"})}>Shop Alerts!</button>
          <button className="btn-2" onClick={() => this.setState({SelectedForm: "NewsForm"})}>NEWS!</button>
          <button className="btn-1" onClick={() => this.setState({SelectedForm: "AstrologyForm"})}>ASTROLOGY!</button>
          <button className="btn-2" onClick={() => this.setState({SelectedForm: "NasaForm"})}>SPACE</button>
        
        </div>

        <div className="forms-div">
          {formdiv}
        </div>
      </div>
    </div>

    );
  }
}
 
export default App;

// function App() {

//   const [selectedForm, SelectForm] = useState("ProductsForm");

//   // useEffect(() => {
//   //   switch (selectedForm){
//   //     case "ProductsForm"   : return <ProductsForm/>;
//   //     case "NewsForm"       : return <NewsForm/>;
//   //     case "AstrologyForm"  : return <AstrologyForm/>;
//   //     case "NasaForm"       : return <NasaForm/>;
//   //   }
//   // }, [])

//   return (
    
//     <div className="App">
    
//       <div className="main-container">

//         <div className="buttons-div">

//           <button className="btn-1" onClick={() => SelectForm("ProductsForm")}>Shop Alerts!</button>
//           <button className="btn-2" onClick={() => SelectForm("NewsForm")}>NEWS!</button>
//           <button className="btn-1" onClick={() => SelectForm("AstrologyForm")}>ASTROLOGY!</button>
//           <button className="btn-2" onClick={() => SelectForm("NasaForm")}>SPACE</button>
        
//         </div>

//         <div className="forms-div">
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
