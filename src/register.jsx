import React, { useState } from 'react'

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle registration logic here
    alert(`Registered with\nEmail: ${form.email}\nPhone: ${form.phone}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-600 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-cyan-700 text-center mb-2">
          Telecommunication Management System
        </h2>
        <h3 className="text-lg font-semibold text-gray-700 text-center mb-6">
          Registration
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Create a password"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium mb-1">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default App