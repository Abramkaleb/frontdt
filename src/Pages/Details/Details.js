import React from 'react';
import { ImageResizer } from 'react-image-resizer';
import './Details.css';
import Spek from "../Image/Spesifikasi.png";


const Details = () => {
return (
<div className="pagedashboard">
    <div className="Spek">
    <img src={Spek} width={1078} height={5756} alt="Spesifikasi.png" />

   </div>
</div>


  );
  }

export default Details
