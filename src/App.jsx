import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { AuthProvider, useAuth } from 'react-oidc-context';
import NotificationProvider from './contexts/NotificationContext';
import Sidebar from './components/common/Sidebar';
import NotificationBar from './components/notifications/NotificationBar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import Plans from './pages/plans/Plans';
import PlanDetail from './pages/plans/PlanDetail';
import Billing from './pages/billing/Billing';
import Checkout from './pages/billing/Checkout';
import Usage from './pages/usage/Usage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UsersTable from './pages/admin/UsersTable';
import Reports from './pages/admin/Reports';
import NotificationCenter from './pages/notifications/NotificationCenter';
import TransactionStatus from './pages/billing/TransactionStatus';

const { Content } = Layout;

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_l8310rUyp", // your region + pool id
  client_id: "77mdivtq7f49h0nal2hu1r18v1",
  redirect_uri: "http://localhost:5173", // same as configured in AWS
  response_type: "code",
  scope: "openid profile email",
};

function AppRoutes() {
  const auth = useAuth();

  if (auth.isLoading) return <div>Loading...</div>;
  if (auth.error) return <div>Error: {auth.error.message}</div>;

  if (!auth.isAuthenticated) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <button onClick={() => auth.signinRedirect()}>Login with Cognito</button>
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <NotificationBar />
        <Content style={{ margin: '24px 16px 0' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* (all your other routes except login/register) */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <button onClick={() => auth.removeUser()}>Logout</button>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <NotificationProvider>
        <Router>
          <AppRoutes />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;