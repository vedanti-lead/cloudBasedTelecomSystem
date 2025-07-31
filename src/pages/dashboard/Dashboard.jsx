import React, { useContext, useState } from 'react';
import { Card, Typography, Button, Form, Input, Row, Col, message } from 'antd';
import { AuthContext } from '../../contexts/AuthContext';
import UsageSummaryCard from '../../components/charts/UsageSummaryCard';

const { Title } = Typography;

const Dashboard = () => {
  const { user, login } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    login({ ...user, ...values });
    setEditing(false);
    message.success('Profile updated!');
  };

  return (
    <div>
      <Title level={2}>User Dashboard</Title>
      <Row gutter={24}>
        <Col xs={24} md={16}>
          <Card title="Profile Information" extra={<Button onClick={() => setEditing(!editing)}>{editing ? 'Cancel' : 'Edit'}</Button>}>
            {editing ? (
              <Form form={form} layout="vertical" initialValues={user} onFinish={onFinish}>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> <Input /> </Form.Item>
                <Form.Item name="phone" label="Phone Number" rules={[{ required: true, pattern: /^\d{10}$/, message: 'Enter a valid 10-digit phone number' }]}> <Input /> </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">Save</Button>
                </Form.Item>
              </Form>
            ) : (
              <div>
                <p><b>Email:</b> {user?.email || 'user@example.com'}</p>
                <p><b>Phone:</b> {user?.phone || '9876543210'}</p>
              </div>
            )}
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <UsageSummaryCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard; 