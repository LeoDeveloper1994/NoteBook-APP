import { useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useUser';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/useRedux';
import { setEmail } from '../../store/slices/userEmail.slice';

const CreateUserForm = () => {
  const { mutate } = useCreateUser();

  const dispatch = useAppDispatch();

  const { handleSubmit, reset, register } = useForm();

  const navigate = useNavigate();

  const submit = (data: SubmitHandler<FieldValues> | FieldValues): void => {
    mutate(data, {
      onSuccess: (res) => {
        const { email } = res.data.data.newUser;
        dispatch(setEmail(email));
        reset();
        navigate('/login');
      },
    });
  };

  return (
    <div>
      <form className="login-user-container" onSubmit={handleSubmit(submit)}>
        <h3>Register:</h3>
        <div className="name-input-container">
          <input
            type="text"
            id="user_name"
            required
            placeholder=" "
            {...register('user_name')}
          />
          <label htmlFor="user_name">Type your name</label>
        </div>
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
          ◄ Already have an account?{' '}
          <span onClick={() => navigate('/login')}>Log In ►</span>
        </p>
      </form>
    </div>
  );
};

export default CreateUserForm;
