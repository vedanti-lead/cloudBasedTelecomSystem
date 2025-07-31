import React, { useState } from 'react';
import { Card, Row, Col, Select, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const mockPlans = [
  { id: 1, name: 'Data 10GB', type: 'Data', value: '10GB', validity: '28 days', price: 199 },
  { id: 2, name: 'Unlimited Calls', type: 'Call', value: 'Unlimited', validity: '28 days', price: 249 },
  { id: 3, name: 'SMS 1000', type: 'SMS', value: '1000', validity: '28 days', price: 99 },
  { id: 4, name: 'Combo', type: 'Combo', value: '5GB + 500min + 500SMS', validity: '56 days', price: 399 },
];

const Plans = () => {
  const [type, setType] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const filtered = mockPlans.filter(
    (plan) => (!type || plan.type === type) && plan.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Available Plans</h2>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col xs={24} md={6}>
          <Select value={type} onChange={setType} style={{ width: '100%' }} placeholder="Filter by type">
            <Option value="">All</Option>
            <Option value="Data">Data</Option>
            <Option value="Call">Call</Option>
            <Option value="SMS">SMS</Option>
            <Option value="Combo">Combo</Option>
          </Select>
        </Col>
        <Col xs={24} md={10}>
          <Input placeholder="Search plans" value={search} onChange={e => setSearch(e.target.value)} />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        {filtered.map(plan => (
          <Col xs={24} md={8} lg={6} key={plan.id}>
            <Card title={plan.name} bordered={false} extra={<Button type="link" onClick={() => navigate(`/plans/${plan.id}`)}>View</Button>}>
              <p><b>Type:</b> {plan.type}</p>
              <p><b>Value:</b> {plan.value}</p>
              <p><b>Validity:</b> {plan.validity}</p>
              <p><b>Price:</b> ₹{plan.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Plans; 