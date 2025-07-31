import React from 'react';
import { Table, Button, Modal } from 'antd';

const mockUsers = [
  { id: 1, email: 'user1@example.com', phone: '9876543210', plan: 'Data 10GB', status: 'Active' },
  { id: 2, email: 'user2@example.com', phone: '9123456780', plan: 'Combo', status: 'Inactive' },
];

const UsersTable = () => {
  const viewLogs = (user) => {
    Modal.info({
      title: `Logs for ${user.email}`,
      content: <div>Performance: Good<br />Last login: 2024-05-10<br />Usage: 10GB, 200min, 50SMS</div>,
    });
  };

  const columns = [
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
    { title: 'Plan', dataIndex: 'plan', key: 'plan' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Actions', key: 'actions', render: (_, user) => <Button onClick={() => viewLogs(user)}>View Logs</Button> },
  ];

  return (
    <div>
      <h2>All Users</h2>
      <Table dataSource={mockUsers} columns={columns} rowKey="id" />
    </div>
  );
};

export default UsersTable; 