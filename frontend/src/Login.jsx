import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './style.css';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);

      // If login is successful, navigate to the home page
      navigate('/');
    } catch (error) {
      // If login fails, update the error state
      setError(error.message);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='bg-black p-3 rounded w-100 border loginForm'>
        <div className='text-danger'>{error && error}</div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className='form-control rounded-0'
              autoComplete='off'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              className='form-control rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
