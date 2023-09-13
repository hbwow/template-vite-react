import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const Layout = () => {
  const history = useNavigate();
  return (
    <div>
      <ul>
        <li onClick={() => history('/')}>home</li>
        <li onClick={() => history('/docs')}>docs</li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
