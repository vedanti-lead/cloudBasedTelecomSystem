import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, AppstoreOutlined, DollarOutlined } from '@ant-design/icons';

const AdminDashboard = () => {
  // Demo/mock data
  const stats = {
    users: 1200,
    activePlans: 350,
    revenue: 125000,
  };
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Row gutter={16}>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total Users" value={stats.users} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Active Plans" value={stats.activePlans} prefix={<AppstoreOutlined />} />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic title="Total Revenue (₹)" value={stats.revenue} prefix={<DollarOutlined />} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard; 