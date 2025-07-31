import React, { useState } from 'react';
import { Card, Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;

const mockData = {
  daily: [
    { date: 'Mon', data: 1.2, calls: 30, sms: 5 },
    { date: 'Tue', data: 1.5, calls: 28, sms: 7 },
    { date: 'Wed', data: 1.1, calls: 35, sms: 6 },
    { date: 'Thu', data: 1.7, calls: 32, sms: 8 },
    { date: 'Fri', data: 1.3, calls: 29, sms: 4 },
    { date: 'Sat', data: 1.6, calls: 31, sms: 9 },
    { date: 'Sun', data: 1.4, calls: 33, sms: 5 },
  ],
  weekly: [
    { date: 'Week 1', data: 8.5, calls: 210, sms: 40 },
    { date: 'Week 2', data: 9.2, calls: 220, sms: 45 },
    { date: 'Week 3', data: 7.8, calls: 200, sms: 38 },
    { date: 'Week 4', data: 8.9, calls: 215, sms: 42 },
  ],
  monthly: [
    { date: 'Jan', data: 35, calls: 900, sms: 160 },
    { date: 'Feb', data: 32, calls: 850, sms: 150 },
    { date: 'Mar', data: 38, calls: 920, sms: 170 },
    { date: 'Apr', data: 36, calls: 910, sms: 165 },
  ],
};

const Usage = () => {
  const [filter, setFilter] = useState('daily');
  const data = mockData[filter];

  return (
    <Card title="Usage Statistics" extra={<Select value={filter} onChange={setFilter}>
      <Option value="daily">Daily</Option>
      <Option value="weekly">Weekly</Option>
      <Option value="monthly">Monthly</Option>
    </Select>}>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data" stroke="#1890ff" name="Data (GB)" />
          <Line type="monotone" dataKey="calls" stroke="#52c41a" name="Calls (min)" />
          <Line type="monotone" dataKey="sms" stroke="#faad14" name="SMS" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Usage; 