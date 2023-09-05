import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserThunk } from '../../store/slices/userSession.slice';
import { useAppDispatch } from '../../hooks/useRedux';

const CreateUserForm = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    const body = {
      user_name: name,
      email,
      password,
    };

    e.preventDefault();
    dispatch(createUserThunk(body));
    reset();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
      console.log(isLoading);
    }, 3000);
  };

  return (
    <div>
      <form className="login-user-container" onSubmit={submit}>
        <h3>Register:</h3>
        <div className="name-input-container">
          <input
            type="text"
            id="username"
            required
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="username">Type your name</label>
        </div>
        <div className="email-input-container">
          <input
            type="email"
            id="email"
            required
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Type your email</label>
        </div>
        <div className="password-input-container">
          <input
            type="password"
            id="password"
            required
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Type your password</label>
        </div>
        <button type="submit">Submit</button>
        <p>
          ◄ Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Log In ►</span>
        </p>
      </form>
    </div>
  );
};

export default CreateUserForm;
