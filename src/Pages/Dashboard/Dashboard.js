import React from 'react';

import './Dashboard.css';

import Temp from "../Temp/Temp";
import Fuel from "../Fuel/Fuel";
import Cooling from "../Cooling/Cooling";

import Rpm from "../Rpm/Rpm";
import Servo from "../Servo/Servo";
import Yanmar65 from "../Image/Yanmar65.png";
import Button from '@mui/material/Button';

import Buttons from './Buttons'

import Streamchartrpm from './Streamchartrpm';
import Streamchartfuel from './Streamchartfuel';


import Streamchart from './Streamchart';



const Dashboard = () => {
return (
  



<div className="page">


  <div className="yanmar">

  <img src={Yanmar65} width={455} height={450} alt="Yanmar65.png" />
 

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
   {/* <Button variant="contained" disableElevation size="large" color="error"> - THROTTLE</Button>
   <Button variant="contained" disableElevation size="large" color="success"> + THROTTLE</Button> */}
  <Buttons /> 
   
   </div>

   <div className="chartjs">  
    <Streamchartrpm />
    {/* <Streamchartfuel /> */}
    </div>

    <div className="chartjs2">  
    {/* <Streamchart />
    <Streamchart /> */}
    </div>

    
    </div> 
    
    </div>
   
   
   
  

   


  );
  }

export default Dashboard
