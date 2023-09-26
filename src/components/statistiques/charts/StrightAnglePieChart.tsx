import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';

const data = [
  { name: 'Group A', value: 400, color: '#06b6d4' },  // Assigning a color for Group A
  { name: 'Group B', value: 300, color: '#dee8fd' }   // Assigning a color for Group B
];
const CustomLabel = ({ viewBox, value } :any) => {
    const { cx, cy } = viewBox;
    return (
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#000000">
        {value}
      </text>
    );
  };
  const HalfPiaChart = () => {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={200}>
          <Pie
            data={data}
            dataKey="value"
            startAngle={240}
            endAngle={0}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} className='relative'>
                <Label content={<CustomLabel value={entry.value} />} />
              </Cell>
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  };
  
  export default HalfPiaChart;
