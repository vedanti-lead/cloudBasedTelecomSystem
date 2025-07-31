import React, { createContext, useState } from 'react';

export const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([
    // Example demo alerts
    { message: 'Your plan will expire in 3 days!', type: 'warning' },
    { message: 'Payment due for last month.', type: 'error' },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Plan renewed successfully.', read: false, timestamp: new Date() },
    { id: 2, message: 'Recharge successful.', read: true, timestamp: new Date(Date.now() - 86400000) },
  ]);

  const addAlert = (alert) => setAlerts((prev) => [...prev, alert]);
  const removeAlert = (idx) => setAlerts((prev) => prev.filter((_, i) => i !== idx));

  const addNotification = (notification) => setNotifications((prev) => [notification, ...prev]);
  const markAsRead = (id) => setNotifications((prev) => prev.map(n => n.id === id ? { ...n, read: true } : n));
  const markAsUnread = (id) => setNotifications((prev) => prev.map(n => n.id === id ? { ...n, read: false } : n));

  return (
    <NotificationContext.Provider value={{ alerts, setAlerts, notifications, addNotification, markAsRead, markAsUnread }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider; 