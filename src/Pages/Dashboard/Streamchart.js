import React from "react";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useEffect, useRef, useState, createBackgroundGradient } from "react";


const Streamchart = () => {

    
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        data: [100, 80, 40, 90, 80, 30],
        label: 'Engine RPM',
        borderWidth: 5,
        backgroundColor: '#5c6d70',
        bordercolor: 'black',
        style:{ width: '300px', height: '600px'},
        fill: true,
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

export default Streamchart;