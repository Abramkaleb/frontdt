import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useEffect, useRef, useState, createBackgroundGradient } from "react";


function getRandomNumber() {
    return Math.random();
  }
  

const Streamchartfuel = () => {
    
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        data: [getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()], //ubah data
        label: 'FUEL',
        borderWidth: 6,
        backgroundColor: 'green',
        bordercolor: 'green',
        style:{ width: '300px', height: '600px'},
        fill: false,
        tension: 0.32,
    }],
    });


    useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
        setChartData({
        datasets: [{
            backgroundColor: createBackgroundGradient(chart.ctx),
        }]
        });
    }
    }, []);
    
    
    return (
    <div> 
        <h5>Chart</h5>
        <Chart id="chart1" type='line' data={chartData} width={500}  />
        <h5>Chart end</h5>
    </div>  
    )
}

export default Streamchartfuel;