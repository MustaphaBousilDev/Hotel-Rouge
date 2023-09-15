import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 500 },
    { name: 'Group F', value: 200 },
    { name: 'Group G', value: 200 },
  ];
  const COLORS = ['#06b6d4', '#0f9ab3', '#158194', '#93d9e5','#0f9ab3','#06b6d4','#93d9e5'];
  
  export default class PiaChartWithPadding extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';
  
    render() {
      return (
        <PieChart width={230} height={300} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={110}
            cy={100}
            innerRadius={70}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
        </PieChart>
      );
    }
  }
  