import React from 'react';
import { Card, Button, Typography, message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const mockPlans = [
  { id: 1, name: 'Data 10GB', type: 'Data', value: '10GB', validity: '28 days', price: 199, desc: '10GB high-speed data for 28 days.' },
  { id: 2, name: 'Unlimited Calls', type: 'Call', value: 'Unlimited', validity: '28 days', price: 249, desc: 'Unlimited local and STD calls.' },
  { id: 3, name: 'SMS 1000', type: 'SMS', value: '1000', validity: '28 days', price: 99, desc: '1000 SMS for 28 days.' },
  { id: 4, name: 'Combo', type: 'Combo', value: '5GB + 500min + 500SMS', validity: '56 days', price: 399, desc: 'Combo of data, calls, and SMS.' },
];

const PlanDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const plan = mockPlans.find(p => p.id === Number(id));
  if (!plan) return <div>Plan not found</div>;

  const handleSubscribe = () => {
    message.success('Subscribed to plan!');
    navigate('/checkout');
  };

  return (
    <Card style={{ maxWidth: 500, margin: 'auto' }}>
      <Title level={3}>{plan.name}</Title>
      <p><b>Type:</b> {plan.type}</p>
      <p><b>Value:</b> {plan.value}</p>
      <p><b>Validity:</b> {plan.validity}</p>
      <p><b>Price:</b> ₹{plan.price}</p>
      <p>{plan.desc}</p>
      <Button type="primary" onClick={handleSubscribe}>Subscribe</Button>
    </Card>
  );
};

export default PlanDetail; 