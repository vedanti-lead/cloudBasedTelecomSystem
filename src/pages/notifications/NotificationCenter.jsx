import React, { useContext } from 'react';
import { List, Button, Typography, Tag } from 'antd';
import { NotificationContext } from '../../contexts/NotificationContext';

const { Text } = Typography;

const NotificationCenter = () => {
  const { notifications, markAsRead, markAsUnread } = useContext(NotificationContext);

  return (
    <div>
      <h2>Notification Center</h2>
      <List
        itemLayout="horizontal"
        dataSource={notifications}
        renderItem={item => (
          <List.Item
            actions={[
              item.read ? (
                <Button size="small" onClick={() => markAsUnread(item.id)}>Mark as Unread</Button>
              ) : (
                <Button size="small" type="primary" onClick={() => markAsRead(item.id)}>Mark as Read</Button>
              )
            ]}
          >
            <List.Item.Meta
              title={<Text strong={!item.read}>{item.message}</Text>}
              description={<span>{new Date(item.timestamp).toLocaleString()} {item.read ? <Tag color="green">Read</Tag> : <Tag color="red">Unread</Tag>}</span>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NotificationCenter; 