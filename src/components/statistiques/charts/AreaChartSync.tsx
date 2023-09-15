import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';

const data = [
  { name: 'Jan', pv: 30 },
  { name: 'Feb', pv: 25 },
  { name: 'Mar', pv: 40 },
  { name: 'Apr', pv: 22 },
  { name: 'May', pv: 36 },
  { name: 'Jun', pv: 45 },
];

export default class AreaChartsSync extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';

  render() {
    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart
            width={500}
            height={80}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="url(#colorGradient)" // Using a linear gradient
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Define the linear gradient */}
        <svg>
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#dee8fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}
