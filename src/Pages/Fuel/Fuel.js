import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";



function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Fuel", getRandomNumber()],
  ];
}

export const options = {
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
  
};

export function Fuel() {
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
      width="100%"
      // height="400px"
      data={data}
      options={options}
    />
  );
}

export default Fuel;


