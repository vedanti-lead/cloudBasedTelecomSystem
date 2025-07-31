import React, { useState, useContext } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      if (values.email === 'user@example.com' && values.password === 'password') {
        login({ email: values.email });
        message.success('Login successful!');
        navigate('/dashboard');
      } else {
        message.error('Invalid email or password');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: 350 }}>
        <Title level={3} style={{ textAlign: 'center' }}>Login</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email' }]}> <Input /> </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }]}> <Input.Password /> </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>Login</Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <a href="/register">Don't have an account? Register</a>
        </div>
      </Card>
    </div>
  );
};

export default Login; 