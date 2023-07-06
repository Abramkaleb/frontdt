import React, {useEffect, useState} from 'react'
import './Fuel.css'
import Chart from 'react-google-charts'
import axios from 'axios'

const Fuel = () => {

  const Getrealtime = 'http://103.175.219.228/api';
  const [fuelValue, setFuelValue] = useState(0);
  const getfuel = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["fuel"]) 
      setFuelValue(value)
      console.log(fuelValue)
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getfuel();
  }, )

  return (

    <div className='gaugefuel'>
    <h1>FUEL</h1>

    <div className='fuel-container'>
      <Chart className='gauge-chart'
  
        chartType="Gauge"
        loader={<div>Fuel Chart</div>}
        data={[
          ['Label', 'Value'],
          ['L', fuelValue]
        ]}
        options={{
          max:250,
          majorTicks: ['0','50','100','150','200','250'],
          redFrom: 0,
          redTo:50,
          // yellowFrom: 50,
          // yellowTo: 150,
          // greenFrom:150,
          // greenTo:250,
          minorTicks: 5,
          width: 180,
      }}
      />
    </div>   </div>
  )
}

export default Fuel