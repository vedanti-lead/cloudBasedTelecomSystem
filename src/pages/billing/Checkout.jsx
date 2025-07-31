import React, { useState } from 'react';
import { Card, Button, Typography, message } from 'antd';

const { Title } = Typography;

const Checkout = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment integration
    setTimeout(() => {
      message.success('Payment successful!');
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <Card style={{ width: 400 }}>
        <Title level={3}>Checkout</Title>
        <p>Plan: <b>Demo Plan</b></p>
        <p>Amount: <b>₹199</b></p>
        <Button type="primary" block loading={loading} onClick={handlePayment} style={{ marginTop: 16 }}>
          Pay with Razorpay/Stripe
        </Button>
      </Card>
    </div>
  );
};

export default Checkout; 