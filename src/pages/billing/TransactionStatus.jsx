import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const TransactionStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Demo: get status from query param or location.state
  const status = location.state?.status || 'success';

  return (
    <Result
      status={status}
      title={status === 'success' ? 'Payment Successful' : 'Payment Failed'}
      subTitle={status === 'success' ? 'Your recharge was successful.' : 'There was an issue with your payment.'}
      extra={[
        <Button type="primary" key="dashboard" onClick={() => navigate('/dashboard')}>Go to Dashboard</Button>,
        <Button key="billing" onClick={() => navigate('/billing')}>View Billing</Button>,
      ]}
    />
  );
};

export default TransactionStatus; 