import React, { ChangeEvent, useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center min-h-screen py-2">
      <label htmlFor="username" className="mb-2">
        Username
        <input type="text" id="username" value={username} onChange={handleUsernameChange} className="p-2 mt-1 border-2 border-gray-300 rounded-md w-full" />
      </label>
      <label htmlFor="password" className="mb-2">
        Password
        <input type="password" id="password" value={password} onChange={handlePasswordChange} className="p-2 mt-1 border-2 border-gray-300 rounded-md w-full" />
      </label>
      <button type="submit" className="p-2 mt-5 bg-blue-500 text-white rounded-md">
        Login
      </button>
    </form>
  );
};

export default Login;