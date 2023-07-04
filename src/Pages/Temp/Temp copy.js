import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios'



const Exhaust = () => {
  const Getrealtime = 'http://localhost:8000/api';
  const [exhaustValue, setExhaustValue] = useState(0);
  const getexhaust = async () => 
  {
    try {
      const response = await axios.get(`${Getrealtime}/antares`);
      const value = parseInt(response["data"]["record"]["exhaust"]) 
      setExhaustValue(value)
      console.log(exhaustValue)
    } catch (e) {
      console.log(e.message);
    }
  }
}

useEffect(() => {
  getexhaust();
},)


export function getData() {
  return [
    ["Label", "Value"],
    ["Temp", exhaustValue],
  ];
}

export const options = {
  max:300,
          majorTicks: ['0','50','100','150','200','250','300'],
          greenFrom:0,
          greenTo:225,
          yellowFrom: 225,
          yellowTo: 270,
          redFrom: 270,
          redTo:300,
          minorTicks: 10,
          width: 180,
};

export function Temp() {
  const [data, setData] = useState(getData);

  useEffect(() => {
    const id = setInterval(() => {
      setData(getData());
    }, 3000);

    return () => {
      clearInterval(id);
    };
  });

  return (
    <Chart
      chartType="Gauge"
      // width="100%"
      // height="300px"
      data={data}
      options={options}
    />
  );
}

export default Temp;


