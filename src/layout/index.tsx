import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => navigate('/')}>home</li>
        <li onClick={() => navigate('/docs?name=tom&age=18')}>docs</li>
        <li onClick={() => navigate('/docs', { replace: true })}>docs</li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
