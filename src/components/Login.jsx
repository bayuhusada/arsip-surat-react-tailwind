import { space } from 'postcss/lib/list';
import React, { useState } from 'react';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError(true);
      window.alert('tidak valid');
    } else {
      await fetch('', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        header: {
          'Content-Type': 'application/json',
        },
      });
    }
  };
  console.log(error);
  return (
    <>
      <section className="bg-satu flex items-center justify-center h-screen">
        <div className="bg-empat p-8 rounded shadow-2xl shadow-empat w-96">
          <h2 className="text-xl text-satu font-semibold mb-6 text-center">LOGIN</h2>
          {error && <span className="font-semibold justify-center">Tidak boleh kosong</span>}
          <form onSubmit={login}>
            <div className="mb-4">
              <label for="username" className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" className="w-full px-3 py-2 border text-dua rounded-md" placeholder="Enter your username" />
            </div>
            <div className="mb-4">
              <label for="password" className="block text-dua text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                style={error ? { border: '1px solid red' } : {}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                className="w-full px-3 py-2 rounded-md"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="bg-tiga hover:bg-satu  text-satu hover:text-empat font-semibold px-4 py-2 rounded-md">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
