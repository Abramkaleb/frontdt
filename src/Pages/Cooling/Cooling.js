import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";



function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Cooling", getRandomNumber()],
  ];
}

export const options = {
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
};

export function Cooling() {
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

export default Cooling;


