import React from 'react';
import { Menu, Layout } from 'antd';
import { UserOutlined, DashboardOutlined, NotificationOutlined, BarChartOutlined, CreditCardOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" style={{ color: '#fff', textAlign: 'center', padding: 16, fontWeight: 'bold', fontSize: 20 }}>Telecom Portal</div>
      <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="/plans" icon={<AppstoreOutlined />}>
          <Link to="/plans">Plans</Link>
        </Menu.Item>
        <Menu.Item key="/billing" icon={<CreditCardOutlined />}>
          <Link to="/billing">Billing</Link>
        </Menu.Item>
        <Menu.Item key="/usage" icon={<BarChartOutlined />}>
          <Link to="/usage">Usage</Link>
        </Menu.Item>
        <Menu.Item key="/notifications" icon={<NotificationOutlined />}>
          <Link to="/notifications">Notifications</Link>
        </Menu.Item>
        <Menu.Item key="/admin" icon={<UserOutlined />}>
          <Link to="/admin">Admin</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar; 