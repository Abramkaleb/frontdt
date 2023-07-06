import React, {useState, useEffect} from 'react'
import './Rpm.css'
import { Chart } from 'react-google-charts';
import axios from 'axios'

const Rpm = () => {

  const Getrealtime = 'http://103.175.219.228/api';
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
    <><div className='gaugerpmtitle'>
      <h1>RPM</h1>
    </div><>
    
    </><div className='gaugerpm'>
        <Chart className='gauge-chart'
          width={'250px'}
          height={'250px'}
          chartType="Gauge"
          data={[
            ['Label', 'Value'],
            ['x100/min', rpmValue]
          ]}
          options={{
            max: 2500,
            majorTicks: ['0', '5', '10', '150', '200', '250'],
            greenFrom: 0,
            // greenTo: 1000,
            // yellowFrom: 2000,
            // yellowTo: 2250,
            redFrom: 2100,
            redTo: 2500,
            minorTicks: 10,
          }} />

      </div></>
  )
}

export default Rpm