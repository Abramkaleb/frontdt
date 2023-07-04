import React, {useEffect, useState} from 'react'
// import './Fuel.css'
import Chart from 'react-google-charts'
import axios from 'axios'

const Fuel = () => {

  const Getrealtime = 'http://localhost:8000/api';
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
    <div className='fuel-container'>
      <Chart className='gauge-chart'
        width={'200px'}
        height={'200px'}
        chartType="Gauge"
        loader={<div>Fuel Chart</div>}
        data={[
          ['Label', 'Value'],
          ['Fuel', fuelValue]
        ]}
        options={{
          max:250,
          majorTicks: ['0','50','100','150','200','250'],
          redFrom: 0,
          redTo:50,
          yellowFrom: 50,
          yellowTo: 150,
          greenFrom:150,
          greenTo:250,
          minorTicks: 25,
          width: 180,
      }}
      />
    </div>
  )
}

export default Fuel