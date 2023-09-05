import { useNavigate } from 'react-router-dom';

const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div className="firstpage-container">
      <div className="firstpage-content-container">
        <div className="app-title-container">
          <h1>
            NoteBook<span>.</span>
          </h1>
        </div>
        <div className="slogan-container">
          <p>
            Start <span>writing</span>
          </p>
        </div>
        <div className="log-cta-container">
          <button onClick={() => navigate('/login')}>Log In</button>
          <button onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
