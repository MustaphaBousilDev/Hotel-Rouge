import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'A',
    uv: 3000,
    pv: 1400,
    dd: 1400,
    amt: 1400,
  },
  {
    name: 'B',
    uv: 1000,
    pv: 398,
    dd: 1400,
    amt: 1210,
  },
  {
    name: 'C',
    uv: 1000,
    pv: 8800,
    dd: 1400,
    amt: 1290,
  },
  {
    name: 'D',
    uv: 1780,
    pv: 2908,
    dd: 1400,
    amt: 1000,
  },
  {
    name: 'E',
    uv: 890,
    pv: 3800,
    dd: 1400,
    amt: 1181,
  },
  {
    name: 'F',
    uv: 1390,
    pv: 2800,
    dd: 1400,
    amt: 1500,
  },
  {
    name: 'G',
    uv: 2490,
    pv: 3300,
    dd: 1400,
    amt: 1100,
  },
];

export default class BarChartSimple extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 10,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#06b6d4" />
          <Bar dataKey="uv" fill="#0f9ab3" />
          <Bar dataKey="dd" fill="#158194" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
