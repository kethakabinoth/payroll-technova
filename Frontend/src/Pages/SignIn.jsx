import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

const SignIn = () => {
  const [username, setUsername] = useState('kethaka');
  const [password, setPassword] = useState('1234');
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In submitted:', { username, password });

    navigate('/sidebar'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-800">
      <div className="bg-white p-10 rounded-lg shadow-lg border-4 border-green-300 max-w-md w-full">
        <h2 className="text-2xl font-bold text-green-600 text-center mb-6">Welcome Admin</h2>
        <p className="text-gray-500 text-center mb-6">Sign into your account</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <div className="flex items-center border border-green-300 rounded focus-within:ring-2 focus-within:ring-green-500">
              <FaUser className="text-gray-400 m-2" />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 focus:outline-none rounded-r"
                required
              />
            </div>
          </div>
          <div>
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
          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setUsername('');
                setPassword('');
              }}
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Reset
            </button>
            <button
             type="button"
              onClick={() => window.close()}
              className="bg-green-500 text-white p-5 rounded hover:bg-green-600 w-36 min-h-16 font-bold"
            >
              Exit
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Don't have any account? <Link to="/signup" className="text-green-600 font-bold">REGISTER</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;