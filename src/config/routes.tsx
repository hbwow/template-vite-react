import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

import Layout from '@/layout';

import { Skeleton } from 'antd';

const wrapLoadable = (dynamic: any) => {
  return loadable(dynamic, {
    fallback: <Skeleton active />,
  });
};

const Home = wrapLoadable(() => import('@/pages/home'));
const Docs = wrapLoadable(() => import('@/pages/docs'));

// layout需要的数据结构
export const layoutRoutes = {
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
};

const routes = createBrowserRouter([layoutRoutes], { basename: import.meta.env.BASE_URL });

export default routes;
