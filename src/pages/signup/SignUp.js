import React, { useState } from 'react';
import s from './SignUp.module.css';
import {useSignup} from '../../hooks/useSignup';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const {signup, isPending, error} = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={s['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <label>
        <span>display name:</span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      {!isPending && <button className='btn'>SignUp</button>}
      {isPending && <button className='btn' disabled>loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default SignUp