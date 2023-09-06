import { useNavigate } from 'react-router-dom';
import { decrypt } from '../utils/cryptoJs';

const userName = decrypt('사용자 이름');

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('토큰');
    localStorage.removeItem('사용자 이름');
    navigate('/frontpage');
  };

  return (
    <div className="dashboard-container">
      <header>
        <h3>Hi, {userName}</h3>
        <div onClick={logout}>L</div>
      </header>
    </div>
  );
};

export default Dashboard;
