import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up submitted:', { firstName, lastName, email, password, confirmPassword });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-800">
      <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-green-300 max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Welcome Back Admin</h2>
        <p className="text-gray-500 text-center mb-6">Sign up to your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-2 focus:outline-none rounded-r"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
                <FaUser className="text-gray-400 m-2" />
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-2 focus:outline-none rounded-r"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
              <FaEnvelope className="text-gray-400 m-2" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 focus:outline-none rounded-r"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
                <FaKey className="text-gray-400 m-2" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 focus:outline-none rounded-r"
                  required
                />
              </div>
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
                <FaKey className="text-gray-400 m-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 focus:outline-none rounded-r"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Create
            </button>
            <button
              type="button"
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Reset
            </button>
            <button
              type="button"
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Exit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Already have an account? <Link to="/signin" className="text-green-600 font-bold" >LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;