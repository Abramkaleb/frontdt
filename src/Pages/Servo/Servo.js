import React, {useState, useEffect} from 'react'
import './Servo.css'
import { Chart } from 'react-google-charts';
import axios from 'axios'

const Servo = () => {

  const Getrealtime = 'http://103.175.219.228/api';
  const [rpmValue, setRpmValue] = useState(0);
  const getrpm = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["servo"]) 
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
    <><><div className='gaugeservotitle'>
      <h1>THROTTLE</h1>
    </div><>

      </></><div className='gaugeservo'>
         <Chart className='gauge-chart'
          width={'250px'}
          height={'250px'}
          chartType="Gauge"
          data={[
            ['Label', 'Value'],
            ['degree', rpmValue]
          ]}
          options={{
            max: 110,
            majorTicks: ['47', '', '', '75', '', '', '110'],
            // greenFrom: 0,
            // greenTo: 1000,
            yellowFrom: 0,
            yellowTo: 5,
            redFrom: 91,
            redTo: 110,
            minorTicks: 4,
            width: 250,
          }} />
      </div></>
  )
}

export default Servo