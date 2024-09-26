import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import PasswordBox from '../components/PasswordBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = () => {
    if (!email || !password) {
      setError('Email and password are required');
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <img src="/images/cart.png" alt="cart-icon" className="mx-auto mb-6 w-32 h-32"/>
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back!</h2>
        <p className="text-center text-gray-600 mb-6">Enter your Credentials to access your account</p>
        <InputBox type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
        <PasswordBox value={password} onChange={e => setPassword(e.target.value)} />
        <div className="flex justify-between items-center my-4">
          <div>
            <input type="checkbox" className="mr-2" />
            <span>Remember for 30 days</span>
          </div>
          <a href="#" className="text-purple-500">forgot password</a>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button text="Login" onClick={handleSignIn} />
        <div className="text-center mt-4">Or</div>
        <div className="flex justify-center mt-4 space-x-4">
          <img src="/images/google.png" alt="Google" className="w-8 h-8" />
          <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          <img src="/images/apple.png" alt="Apple" className="w-8 h-8" />
        </div>
        <div className="text-center mt-4">
          Don’t have an account? <Link to="/signup" className="text-purple-500">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
