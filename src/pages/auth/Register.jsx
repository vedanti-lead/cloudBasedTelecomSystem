import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      message.success('Registration successful!');
      navigate('/login');
      setLoading(false);
    }, 1200);
  };

  const beforeUpload = (file) => {
    const isAllowed = file.type === 'application/pdf' || file.type.startsWith('image/');
    if (!isAllowed) {
      message.error('You can only upload PDF or image files!');
    }
    return isAllowed;
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: 400 }}>
        <Title level={3} style={{ textAlign: 'center' }}>Register</Title>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email' }]}> <Input /> </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please enter your password' }, { min: 6, message: 'Password must be at least 6 characters' }]}> <Input.Password /> </Form.Item>
          <Form.Item name="phone" label="Phone Number" rules={[{ required: true, message: 'Please enter your phone number' }, { pattern: /^\d{10}$/, message: 'Enter a valid 10-digit phone number' }]}> <Input /> </Form.Item>
          <Form.Item name="kyc" label="KYC Document (PDF/Image)" rules={[{ required: true, message: 'Please upload your KYC document' }]}> <Upload beforeUpload={beforeUpload} fileList={fileList} onChange={({ fileList }) => setFileList(fileList)} maxCount={1} listType="text"> <Button icon={<UploadOutlined />}>Upload</Button> </Upload> </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>Register</Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: 'center' }}>
          <a href="/login">Already have an account? Login</a>
        </div>
      </Card>
    </div>
  );
};

export default Register; 