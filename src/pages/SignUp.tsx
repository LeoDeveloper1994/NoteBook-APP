import { CreateUserForm } from '../components/forms';

const SignUp = () => {
  return (
    <div className="firstpage-container">
      <div className="firstpage-content-container">
        <div className="app-title-container">
          <h1>
            NoteBook<span>.</span>
          </h1>
        </div>
        <CreateUserForm />
      </div>
    </div>
  );
};

export default SignUp;
