import React from 'react';
import Its from  "../Image/ITS.png"
import Cover from  "../Image/Cover.png"
import DT from  "../Image/DT.png"

import './Home.css';




const Home = () => {
return (
<div className="home">


<div className='Cover'> 
  <img src={Cover} width={1600} height={780} alt="Cover.png" />
    </div>

<div className='Its'> 
<img src={Its} width={70} height={70} alt="ITS.png" />
    </div>

    <div className='dt'> 
<img src={DT} width={1000} height={480} alt="DT.png" />
    </div>

    
    


  <div className='title'> 
    <h1>Digital Twin</h1>
    </div>

    <div className='tex1'> 
    <p1>A virtual representation of an object or system that spans its lifecycle,</p1> 
    <p1>is updated from real-time data, and uses simulation, machine learning </p1>
    <p1>and reasoning to help decision making. -ibm</p1>
    </div>
  
    <div className='title2'> 
    <h1>Our Project</h1>
    </div>

    <div className='tex2'> 
    <p1>Our objective in undertaking this project is to create a virtual </p1> 
    <p1>representation of a Yanmar TF 65 engine that can be monitored and controlled</p1>
    <p1>in real-time data. The purpose of this research is to conduct an initial</p1>
    <p1>investigation into digital twin technology at the DMOM laboratory.</p1>
    </div>








   </div>



  );
  }

export default Home
