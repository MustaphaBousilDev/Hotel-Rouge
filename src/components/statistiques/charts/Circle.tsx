import React, { useState,useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'; // Check the actual import statement based on your package structure
import dynamic from 'next/dynamic';
import { ApexOptions } from "react-apexcharts";
export const CircleChart = () => {
  const [series, setSeries] = useState([44, 55, 41]);
  const [options, setOptions] = useState<ApexOptions>({
    chart: {type: 'donut',},
    responsive: [
        {
            breakpoint: 600,
            options: {
              chart: {
                width: 270,
              },
              legend: {
                position: 'right',
              },
            },
          },
          {
            breakpoint: 1000,
            options: {
              chart: {
                width: 240,
              },
              legend: {
                position: 'right',
              },
            },
          },
    {
        breakpoint: 1280,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: 'right',
          },
        },
      },
      {
        breakpoint: 2080,
        options: {
          chart: {
            width: 280,
          },
          legend: {
            position: 'right',
          },
        },
      },
    
],
  });


  // Fetch and import ReactApexChart only on the client-side
  const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const chartStyle = {
    width: '400px', // Set the desired width
    height: '300px', // Set the desired height
    // Add any other custom styles you want for the chart container
  };

  
  
  return (
    <div id="chart">
        <ReactApexChart 
            options={options} 
            series={series} 
            type="donut" 
            style={chartStyle }
        />
    </div>
  );
};

