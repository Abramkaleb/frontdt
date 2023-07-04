import React, {useState, useEffect} from 'react'
// import './Rpm.css'
import { Chart } from 'react-google-charts';
import axios from 'axios'

const Servo = () => {

  const Getrealtime = 'http://localhost:8000/api';
  const [rpmValue, setRpmValue] = useState(0);
  const getrpm = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["rpm"]) 
      setRpmValue(value)
      console.log(rpmValue)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getrpm();
  }, )

  return (
    <div className='exhaust-container'>
      <Chart className='gauge-chart'
        width={'250px'}
        height={'250px'}
        chartType="Gauge"
        loader={<div>Exhaust Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Throttle', rpmValue]
        ]}
        options={{
          max:2500,
          majorTicks: ['0','500','1000','1500','2000','2500'],
          greenFrom: 0,
          greenTo: 1000,
          yellowFrom: 1000,
          yellowTo: 2000,
          redFrom: 2000,
          redTo:2500,
          minorTicks: 10,
          width: 250,
        }}
        />
    </div>
  )
}

export default Servo