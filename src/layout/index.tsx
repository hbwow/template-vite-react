import { NavLink, Outlet, useNavigationType } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

import { ProLayout } from '@ant-design/pro-components';
import RouterAnimation from '@hbwow/router-animation';
import { Button, Dropdown } from 'antd';
import { RouteAuthorization, CustomSuspense } from '@hbwow/components';

import logo from '@/assets/images/logo.png';
import avatar from '@/assets/images/avatar.png';

import { clearAllLocal, getLocalToken } from '@/utils/storage';
import { layoutRoutes as localRoutes } from '@/config/routes';

// eslint-disable-next-line no-console
console.log('🚀🚀🚀 ~ getLocalToken:', getLocalToken);

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const action = useNavigationType();

  const onSwitchSystem = () => {
    // window.location.href = '/login/list';
  };

  const onLogout = () => {
    clearAllLocal();
    // window.location.href = '/login';
  };

  const isLoadingMenu = false;
  const dataMenu = [];

  return (
    // <div>
    //   <ul>
    //     <li onClick={() => navigate('/')}>home</li>
    //     <li onClick={() => navigate('/docs?name=tom&age=18')}>docs</li>
    //     <li onClick={() => navigate('/docs', { replace: true })}>docs</li>
    //   </ul>

    //   <Outlet />
    // </div>
    <ProLayout
      route={import.meta.env.DEV ? localRoutes : { children: dataMenu }}
      menu={{ autoClose: false, loading: isLoadingMenu }}
      location={location}
      breakpoint={false}
      layout='mix'
      title='XXXX系统'
      siderWidth={250}
      logo={logo}
      token={{
        bgLayout: '#FAFAFA',
        header: {
          colorBgHeader: '#1D1F20',
          colorHeaderTitle: '#FFFFFF',
          colorTextRightActionsItem: '#C4C7CA',
        },
      }}
      onMenuHeaderClick={() => {
        navigate('/');
      }}
      menuItemRender={(item, dom) => {
        return <NavLink to={item.path as string}>{dom}</NavLink>;
      }}
      avatarProps={{
        src: avatar,
        size: 'small',
        // title: dataUserInfo?.employeeName || dataUserInfo?.username,
        render: (_, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'switchSystem',
                    label: '切换系统',
                    onClick: onSwitchSystem,
                  },
                  {
                    key: 'logout',
                    label: '退出登录',
                    onClick: onLogout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
    >
      <RouterAnimation action={action} motionKey={location.pathname}>
        <div style={{ display: !isLoadingMenu ? 'none' : 'block' }} className='py-32 px-40'>
          <CustomSuspense isLoading={true} />
        </div>
        <div style={{ display: isLoadingMenu ? 'none' : 'block' }}>
          <RouteAuthorization
            route={import.meta.env.DEV ? localRoutes : { children: dataMenu }}
            pathname={location.pathname}
            resultProps={{
              extra: (
                <Button
                  type='primary'
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  回到首页
                </Button>
              ),
            }}
          >
            <Outlet />
          </RouteAuthorization>
        </div>
      </RouterAnimation>
    </ProLayout>
  );
};

export default Layout;
