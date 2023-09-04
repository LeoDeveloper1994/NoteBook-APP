import { LoginForm } from '../components/forms';

const Login = () => {
  return (
    <div className="firstpage-container">
      <div className="firstpage-content-container">
        <div className="app-title-container">
          <h1>
            NoteBook<span>.</span>
          </h1>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
