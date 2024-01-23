import Layout from '@/layout';
import wrapLoadable from './wrapLoadable';

const Home = wrapLoadable(() => import('@/pages/home'));
const Docs = wrapLoadable(() => import('@/pages/docs'));

// layout需要的数据结构
export const layoutRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      name: '首页',
      // hideInMenu: true,
      element: <Home />,
    },
    {
      path: '/docs',
      name: '文档',
      element: <Docs />,
    },
  ],
};

export default layoutRoutes;
