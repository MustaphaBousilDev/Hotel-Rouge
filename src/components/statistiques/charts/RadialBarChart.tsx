import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  Layer,
} from 'recharts';

const data = [
    {
      "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#06b6d4"
    },
    {
      "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#0f9ab3"
    },
    {
      "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#158194"
    },
    {
      "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#93d9e5"
    },
    {
        "name": "40-49",
        "uv": -8.63,
        "pv": 3908,
        "fill": "#0f9ab3"
      },
      {
        "name": "50+",
        "uv": -2.63,
        "pv": 4800,
        "fill": "#06b6d4"
      },
      {
        "name": "unknow",
        "uv": 6.67,
        "pv": 10000,
        "fill": "#93d9e5"
      }
    
  ]

const ChartRadial = () => {
  return (
    <div  className='flex items-center justify-center'>
        <RadialBarChart
        width={450}
        height={300}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        
        startAngle={220}
        endAngle={0}
        background="#fff"
        >
        <RadialBar 
            minAngle={15} 
            label={{ fill: '#6b6d4', position: 'insideStart' }} 
            background 
            clockWise={true} 
            dataKey='uv' 
        />
        
        
        <Tooltip />
        </RadialBarChart>
    </div>
  );
};

export default ChartRadial;
