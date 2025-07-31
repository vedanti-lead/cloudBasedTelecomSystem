import React, { useState } from 'react';
import { Table, Card, DatePicker, InputNumber, Row, Col } from 'antd';
import dayjs from 'dayjs';

const mockBills = [
  { id: 1, date: '2024-05-01', amount: 199, status: 'Success' },
  { id: 2, date: '2024-04-15', amount: 249, status: 'Failed' },
  { id: 3, date: '2024-03-10', amount: 99, status: 'Success' },
];

const Billing = () => {
  const [date, setDate] = useState(null);
  const [minAmount, setMinAmount] = useState();
  const [maxAmount, setMaxAmount] = useState();

  const filtered = mockBills.filter(bill => {
    const matchDate = !date || dayjs(bill.date).isSame(date, 'month');
    const matchMin = minAmount === undefined || bill.amount >= minAmount;
    const matchMax = maxAmount === undefined || bill.amount <= maxAmount;
    return matchDate && matchMin && matchMax;
  });

  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount (₹)', dataIndex: 'amount', key: 'amount' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  return (
    <Card title="Billing History">
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col xs={24} md={8}>
          <DatePicker onChange={setDate} picker="month" style={{ width: '100%' }} placeholder="Filter by month" />
        </Col>
        <Col xs={12} md={8}>
          <InputNumber onChange={setMinAmount} style={{ width: '100%' }} placeholder="Min Amount" />
        </Col>
        <Col xs={12} md={8}>
          <InputNumber onChange={setMaxAmount} style={{ width: '100%' }} placeholder="Max Amount" />
        </Col>
      </Row>
      <Table dataSource={filtered} columns={columns} rowKey="id" pagination={false} />
    </Card>
  );
};

export default Billing; 