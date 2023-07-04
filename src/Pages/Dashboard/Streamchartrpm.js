import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useEffect, useRef, useState, createBackgroundGradient } from "react";
import axios from "axios";

function getRandomNumber() {
    return Math.random();
  }
  

const Streamchartrpm = () => {
    
    const Getrealtime = 'http://localhost:8000/api';
    const [rpmValue, setRpmValue] = useState(0);
    const getrpm = async () => 
    {
      try {
        const response = await axios.get(`${Getrealtime}/rpm`);
        const value = parseInt(response["engine_rpm"]) 
        console.log(response)

        setRpmValue(value)
        console.log(rpmValue)
      } catch (e) {
        console.log(e.message);
      }
    }

    useEffect(() => {
      getrpm();
    }, )

    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
    labels: ['', '', '', '', '', ''],
    datasets: [{
        data: [getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()], //ubah data
        label: 'Engine RPM',
        borderWidth: 3,
        // backgroundColor: 'black',
        // bordercolor: 'black',
        // style:{ width: '300px', height: '600px'},
        fill: false,
        tension: 0.32,
    
    }],
    });


    useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
        setChartData({
        datasets: [{
        backgroundColor: 'createBackgroundGradient'(chart.ctx),
        }]
        });
    }
    }, []);
    
    
    return (
    <div> 
        <h5>Rpm</h5>
        <Chart id="chart1" type='line' data={chartData} width={900} height={300}  />
        <h5>Time(s)</h5>
    </div>  
    )
}

export default Streamchartrpm;