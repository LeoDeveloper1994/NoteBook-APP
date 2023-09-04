import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { Dashboard, FrontPage, SignUp } from '../../pages';
import Login from '../../pages/LogIn';


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
