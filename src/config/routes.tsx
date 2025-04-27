import Layout from '@/layout';
import wrapLoadable from './wrapLoadable';

const Home = wrapLoadable(() => import('@/pages/home'));
const Docs = wrapLoadable(() => import('@/pages/docs'));
const ProDemo = wrapLoadable(() => import('@/pages/pro-demo'));

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
    {
      path: '/pro-demo',
      name: 'pro-demo',
      element: <ProDemo />,
    },
  ],
};

export default layoutRoutes;
