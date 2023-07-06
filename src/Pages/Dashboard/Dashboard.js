import React from 'react';
import './Dashboard.css';


//gauge
import Temp from "../Temp/Temp";
import Fuel from "../Fuel/Fuel";
import Cooling from "../Cooling/Cooling";
import Rpm from "../Rpm/Rpm";
import Servo from "../Servo/Servo";

//comp
import Yanmar65 from "../Image/Yanmar65.png";
import Buttons from './Buttons'


//chart
import Streamchartrpm from './Streamchartrpm';
import Streamchartcooling from './Streamchartcooling';
import Streamcharttemp from './Streamcharttemp';
import Streamchartfuel from './Streamchartfuel';





const Dashboard = () => {
return (
  



<div className='page'>


  <div className="yanmar">
  <img src={Yanmar65} width={525} height={500} alt="Yanmar65.png" />
  </div> 
  
  <div className="gauge1">
  <Servo />
   <Rpm />
   </div>

   <div className="gauge2">
   <Temp />
   <Cooling />
   <Fuel />
   </div>

   <div className="buttons">
  <Buttons /> 
  </div>
 


  <div className="charttitlerpm">  
  <h1>ENGINE RPM</h1>
  </div>
  <div className="charttitletemp">  
  <h1>EXHAUST TEMPERATURE</h1>
  </div>
  <div className="charttitlecooling">  
  <h1>COOLING WATER FLOW</h1>
  </div>
  <div className="charttitlefuel">  
  <h1>FUEL TANK</h1>
  </div>

   <div className="chartjsrpm">  
   <Streamchartrpm />
   </div>
   <div className="chartjstemp">  
   <Streamcharttemp />
   </div>
   <div className="chartjscooling">  
   <Streamchartcooling />
   </div>
   <div className="chartjsfuel">  
   <Streamchartfuel />
   </div>





    </div>


   
   
  

   


  );
  }

export default Dashboard
