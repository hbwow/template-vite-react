import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from '@/layout';
const Home = loadable(() => import('@/pages/home'));
const Docs = loadable(() => import('@/pages/docs'));

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
