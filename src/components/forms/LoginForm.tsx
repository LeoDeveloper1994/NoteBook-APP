import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useRedux';
import { useLoginUser } from '../../hooks/useUser';
import { encrypt } from '../../utils/cryptoJs';

const LoginForm = () => {
  const { mutate } = useLoginUser();

  const emailExist = useAppSelector((state) => state.userEmail);

  const [email, setEmail] = useState(() => {
    if (!emailExist) {
      return '';
    }

    return emailExist;
  });
  const [password, setPassword] = useState('');

  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const body = {
      email,
      password,
    };

    mutate(body, {
      onSuccess: async (res) => {
        const { token, user } = res.data.data;
        await encrypt('토큰', token);
        encrypt('사용자 이름', user.user_name);
        reset();
        navigate('/dashboard');
      },
    });
  };

  return (
    <div>
      <form className="login-user-container" onSubmit={submit}>
        <h3>Log In:</h3>
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
          <i
            className={`fa-regular fa-eye${isVisible ? '' : '-slash'}`}
            onClick={() => setIsVisible(!isVisible)}
          ></i>
          <input
            type={`${isVisible ? 'text' : 'password'}`}
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
          ◄ Dont have an account?{' '}
          <span onClick={() => navigate('/signup')}>Sign Up ►</span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
