import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import PasswordBox from '../components/PasswordBox';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    if (!name || !email || !password) {
      setError('All fields are required');
    } else {
      setError(null);
      // Implement sign-up logic here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <img src="/images/cart.png" alt="cart-icon" className="mx-auto mb-6 w-32 h-32" />
        <InputBox type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <InputBox type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
        <PasswordBox value={password} onChange={e => setPassword(e.target.value)} />
        <div className="flex items-center my-4">
          <input type="checkbox" className="mr-2" />
          <span>I agree to the <a href="#" className="text-purple-500">terms & policy</a></span>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <Button text="Signup" onClick={handleSignUp} />
        <div className="text-center mt-4">Or</div>
        <div className="flex justify-center mt-4 space-x-4">
          <img src="/images/google.png" alt="Google" className="w-8 h-8" />
          <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8" />
          <img src="/images/facebook.png" alt="Facebook" className="w-8 h-8" />
          <img src="/images/apple.png" alt="Apple" className="w-8 h-8" />
        </div>
        <div className="text-center mt-4">
          Already have an account? <Link to="/signin" className="text-purple-500">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
