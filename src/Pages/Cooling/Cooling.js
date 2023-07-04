import React, {useEffect, useState} from 'react'
import './Cooling.css'
import Chart from 'react-google-charts'
import axios from 'axios'

const Cooling = () => {
  const Getrealtime = 'http://localhost:8000/api';
  const [coolingValue, setCoolingValue] = useState(0);
  const getcooling = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["cooling"]) 
      setCoolingValue(value)
      console.log(coolingValue)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getcooling();
  }, ) 

  return (
    <div className='cooling-container'>
      <Chart 
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Cooling Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Cooling', coolingValue]
        ]}
        options={{
          max:150,
          majorTicks: ['0','30','60','90','120','150'],
          greenFrom:0,
          greenTo:90,
          yellowFrom: 90,
          yellowTo: 120,
          redFrom: 120,
          redTo:150,
          minorTicks: 10,
          width: 180,
        }}
      />
    </div>
  )
}

export default Cooling