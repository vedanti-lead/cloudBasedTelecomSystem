import React, { useContext } from 'react';
import { Alert } from 'antd';
import { NotificationContext } from '../../contexts/NotificationContext';

const NotificationBar = () => {
  const { alerts } = useContext(NotificationContext);
  if (!alerts.length) return null;
  return (
    <div style={{ margin: '16px 0' }}>
      {alerts.map((alert, idx) => (
        <Alert
          key={idx}
          message={alert.message}
          type={alert.type}
          showIcon
          closable
          style={{ marginBottom: 8 }}
        />
      ))}
    </div>
  );
};

export default NotificationBar; 