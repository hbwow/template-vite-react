import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/layout';
import Home from '@/pages/home';
import Docs from '@/pages/docs';

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/docs',
        element: <Docs />,
      },
    ],
  },
]);

export default routes;
