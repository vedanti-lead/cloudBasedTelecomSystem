import React from 'react';
import { Card, Button, Table } from 'antd';

const mockReport = [
  { id: 1, user: 'user1@example.com', plan: 'Data 10GB', amount: 199, date: '2024-05-01' },
  { id: 2, user: 'user2@example.com', plan: 'Combo', amount: 399, date: '2024-04-15' },
];

const columns = [
  { title: 'User', dataIndex: 'user', key: 'user' },
  { title: 'Plan', dataIndex: 'plan', key: 'plan' },
  { title: 'Amount (₹)', dataIndex: 'amount', key: 'amount' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
];

function downloadCSV() {
  const csv = [
    ['User', 'Plan', 'Amount', 'Date'],
    ...mockReport.map(r => [r.user, r.plan, r.amount, r.date]),
  ].map(row => row.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'report.csv';
  a.click();
  URL.revokeObjectURL(url);
}

const Reports = () => (
  <Card title="Downloadable Reports">
    <Button type="primary" onClick={downloadCSV} style={{ marginBottom: 16 }}>Download CSV</Button>
    <Table dataSource={mockReport} columns={columns} rowKey="id" pagination={false} />
  </Card>
);

export default Reports; 