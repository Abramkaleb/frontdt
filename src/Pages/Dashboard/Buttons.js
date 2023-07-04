import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Buttons.css';

const Getrealtime = 'http://localhost:8000/api'; 

const Buttons = () => {
  const [servoValue, setServoValue] = useState(0);

  const getservo = async () => {
    try {
      const response = await axios.get(`${Getrealtime}/antarespost`);
      const value = parseInt(response["data"]["con"]["servo"]) 

      console.log( JSON.stringify(value) );

      setServoValue(value);
      console.log(servoValue);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getservo();
  }, []);

  const increaseSpeed = () => {
    setServoValue(value => value + 5);
  };

  const decreaseSpeed = () => {
    setServoValue(value => value - 5);
  };

  const sendServoValue = async () => {
    try {
      await axios.post(`${Getrealtime}/antarespost`, {
        servo: servoValue
      });
      console.log('Servo value sent successfully:', servoValue);
    } catch (e) {
      console.log('Error sending servo value:', e.message);
    }
  };

  useEffect(() => {
    // Memanggil fungsi sendServoValue saat komponen di-mount
    sendServoValue();
  }, [servoValue]); // Tambahkan dependency array [servoValue] agar fungsi dipanggil saat nilai servoValue berubah

  return (
    <div className="buttoncss">
      
      <button className='decrease' onClick={decreaseSpeed}>
        - THROTTLE
      </button>

      <button className='increase' onClick={increaseSpeed}>
        +  THROTTLE
      </button>

    </div>
  );
};

export default Buttons;