import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";



function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["RPM", getRandomNumber()],
  ];
}

export const options = {
  max:2500,
  majorTicks: ['0','500','1000','1500','2000','2500'],
  greenFrom: 0,
  greenTo: 1000,
  yellowFrom: 1000,
  yellowTo: 2000,
  redFrom: 2000,
  redTo:2500,
  minorTicks: 10,
  width: 380,
  
};

export function Rpm() {
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
      height="250px"
      data={data}
      options={options}
    />
  );
}

export default Rpm;


