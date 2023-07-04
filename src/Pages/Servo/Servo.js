import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";



function getRandomNumber() {
  return Math.random() * 100;
}

export function getData() {
  return [
    ["Label", "Value"],
    ["Throttle", getRandomNumber()],
  ];
}

export const options = {
  max:180,
  majorTicks: ['0','30','60','90','120','150', '180'],
  greenFrom: 0,
  greenTo: 90,
  yellowFrom: 90,
  yellowTo: 150,
  redFrom: 150,
  redTo:180,
  minorTicks: 6,
  width: 250,
}

export function Servo() {
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

export default Servo;


