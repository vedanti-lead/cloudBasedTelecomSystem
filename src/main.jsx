import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/reset.css'
import './index.css'
import { AuthProvider } from 'react-oidc-context'

// 🧠 Replace with your actual Cognito config:
const cognitoAuthConfig = {
  authority: "https://ap-southeast-2l8310ruyp.auth.ap-southeast-2.amazoncognito.com",
  client_id: "77mdivtq7f49h0nal2hu1r18v1",
  redirect_uri: "http://localhost:5173", // or your deployed URL
  scope: 'openid',
  response_type: 'code',
  automaticSilentRenew: true,

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
