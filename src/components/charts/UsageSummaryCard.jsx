import React from 'react';
import { Card, Statistic, Row, Col } from 'antd';
import { WifiOutlined, PhoneOutlined, MessageOutlined } from '@ant-design/icons';

const UsageSummaryCard = () => {
  // Demo/mock data
  const usage = {
    data: 12.5, // GB
    calls: 320, // minutes
    sms: 45,
  };
  return (
    <Card title="Usage Summary">
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Data (GB)" value={usage.data} prefix={<WifiOutlined />} precision={2} />
        </Col>
        <Col span={8}>
          <Statistic title="Calls (min)" value={usage.calls} prefix={<PhoneOutlined />} />
        </Col>
        <Col span={8}>
          <Statistic title="SMS" value={usage.sms} prefix={<MessageOutlined />} />
        </Col>
      </Row>
    </Card>
  );
};

export default UsageSummaryCard; 