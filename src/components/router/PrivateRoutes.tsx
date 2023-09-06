import { Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

const PrivateRoutes = () => {
  const token = localStorage.getItem('토큰');

  if (!token) return <Navigate to="/frontpage" />;

  return <Dashboard />;
};

export default PrivateRoutes;
