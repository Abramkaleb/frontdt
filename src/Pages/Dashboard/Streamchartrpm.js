import React from "react";
import './Streamchart.css';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import axios from 'axios';
import { useEffect, useRef, useState, createBackgroundGradient } from "react";


const Streamchartrpm = () => {
    const Getrealtime = 'http://103.175.219.228/api';
    const chartRef = useRef(null);
    const [dataChart, setDataChart] = useState();
    const [chartData, setChartData] = useState({
        datasets: [{
            data: [],
            label: 'ENGINE RPM',
            borderWidth: 3,
            backgroundColor: '#edea00',
            bordercolor: '#edea00',
            style:{ width: '150px', height: '300px'},
            fill: true,
            tension: 0.32,
            options: {
                scales: {
                    x: {
                        type: 'timeseries',
                    }
                }
            }
        }],
        });
    const getChartRpm = async () =>
  {
    try {
      const response = await axios.get(`${Getrealtime}/chart/rpm`);
      const data = response["data"];
      setDataChart(data["data"]);
      console.log(dataChart);
      setChartData({
        datasets: [{
            data: data["data"],
            label: 'ENGINE RPM',
            borderWidth: 3,
            backgroundColor: '#000000',
            bordercolor: '#edea00',
            style:{ width: '150px', height: '300px'},
            fill: false,
            tension: 0.32,
            options: {
                scales: {
                    x: {
                        type: 'timeseries',
                    }
                }
            }
        }],
        });

    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getChartRpm();

    const chart = chartRef.current;

    if (chart) {
        setChartData({
        datasets: [{
            backgroundColor: createBackgroundGradient(chart.ctx),
        }]
        });
    }
  },[]);

  useEffect(() =>{
    // Schedule the API call every 5 seconds
    const intervalId = setInterval(() => {
        getChartRpm();
      }, 5000);
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(intervalId);
      };
  },[dataChart]);
    
    
  return (
   

    <div className="judul">
      <div className="chart">
              <h1></h1>
              <Chart id="chart1" type='line' data={chartData} width={450} height={200} />
              <h1></h1>
          </div>  
          </div>
   

    )
}

export default Streamchartrpm;