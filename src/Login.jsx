// src/Login.jsx
import React from 'react'
import { useAuth } from 'react-oidc-context'

const Login = () => {
  const auth = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-cyan-700 mb-6">Login</h2>
        <button
          onClick={() => auth.signinRedirect()}
          className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded transition"
        >
          Login with Cognito
        </button>
      </div>
    </div>
  )
}

export default Login
