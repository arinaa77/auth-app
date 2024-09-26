import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import PasswordBox from '../components/PasswordBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError('All fields are required');
    } else {
      setError(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <img src="/images/cart.png" alt="cart-icon" className="mx-auto mb-6 w-32 h-32" />

        {/* Name Label and Input */}
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">
          Name
        </label>
        <InputBox
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        {/* Email Label and Input */}
        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mt-4">
          Email address
        </label>
        <InputBox
          type="email"
          placeholder="Enter your email"
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

        {/* Terms and Policy Checkbox */}
        <div className="flex items-center my-4">
          <input type="checkbox" className="mr-2" />
          <span>I agree to the <a href="#" className="text-purple-500">terms & policy</a></span>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Signup Button */}
        <Button text="Signup" onClick={handleSignUp} />

        {/* Divider and Social Login Options */}
        <div className="text-center mt-4">Or</div>

        {/* New "Sign in with" text */}
        <div className="text-center text-gray-600 my-2">Sign in with</div>

        <div className="flex justify-center mt-4 space-x-4">
          <img src="/images/google.png" alt="Google" className="w-8 h-8" />
          <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          <img src="/images/apple.png" alt="Apple" className="w-8 h-8" />
        </div>

        {/* Sign In link */}
        <div className="text-center mt-4">
          Already have an account? <Link to="/signin" className="text-purple-500">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
