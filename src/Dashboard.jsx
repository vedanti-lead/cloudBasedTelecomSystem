import React, { useState } from 'react'

const Dashboard = ({ userEmail, onLogout }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: userEmail,
    phone: '1234567890'
  })
  const [editing, setEditing] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    setEditing(false)
    setMessage('Profile updated successfully!')
    setTimeout(() => setMessage(''), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-700">Dashboard</h2>
          <button
            onClick={onLogout}
            className="text-sm text-red-500 hover:underline"
          >
            Logout
          </button>
        </div>
        {message && <div className="mb-4 text-green-600">{message}</div>}
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-1">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!editing}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400 bg-gray-100"
            />
          </div>
          {editing ? (
            <button
              type="submit"
              className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded transition"
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded transition"
            >
              Edit Profile
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Dashboard