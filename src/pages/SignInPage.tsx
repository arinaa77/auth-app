import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import PasswordBox from '../components/PasswordBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

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
        <img src="/images/cart.png" alt="cart-icon" className="mx-auto mb-6 w-32 h-32" />
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome back!</h2>
        <p className="text-center text-gray-600 mb-6">Enter your credentials to access your account</p>

        {/* Email Label and Input */}
        <label htmlFor="email" className="block text-sm font-bold text-gray-700">
          Email address
        </label>
        <InputBox
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        {/* Password Label and Input */}
        <label htmlFor="password" className="block text-sm font-bold text-gray-700 mt-4">
          Password
        </label>
        <PasswordBox
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {/* Forgot Password and Remember Me */}
        <div className="flex justify-between items-center my-4">
          <div>
            <input type="checkbox" className="mr-2" />
            <span>Remember for 30 days</span>
          </div>
          <a href="#" className="text-purple-500 font-bold">Forgot password?</a>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Sign In Button */}
        <Button text="Login" onClick={handleSignIn} />

        {/* Divider and Social Login Options */}
        <div className="text-center mt-4 font-medium">Or</div>

        {/* New "Sign in with" text */}
        <div className="text-center text-gray-600 my-2 font-bold">Sign in with</div>

        <div className="flex justify-center mt-4 space-x-4">
          <img src="/images/google.png" alt="Google" className="w-8 h-8" />
          <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          <img src="/images/apple.png" alt="Apple" className="w-8 h-8" />
        </div>

        {/* Sign Up link */}
        <div className="text-center mt-4">
          Don’t have an account? <Link to="/signup" className="text-purple-500 font-bold">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
