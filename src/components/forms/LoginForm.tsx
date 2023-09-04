import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const submit = (data: SubmitHandler<FieldValues> | FieldValues): void => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form className="login-user-container" onSubmit={handleSubmit(submit)}>
        <h3>Log In:</h3>
        <div className="email-input-container">
          <input
            type="email"
            id="email"
            required
            placeholder=" "
            {...register('email')}
          />
          <label htmlFor="email">Type your email</label>
        </div>
        <div className="password-input-container">
          <input
            type="password"
            id="password"
            required
            placeholder=" "
            {...register('password')}
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
