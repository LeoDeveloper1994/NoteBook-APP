import { Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

const PrivateRoutes = () => {
  const token: string | null = localStorage.getItem('token');

  if (!token) return <Navigate to="/frontpage" />;

  return <Dashboard />;
};

export default PrivateRoutes;
