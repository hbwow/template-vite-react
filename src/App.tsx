import router from '@/config';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from '@hbwow/validate-antd';

// react-query 全局配置
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // 窗口聚焦重新获取
      retry: false, // 查询重试
      cacheTime: 5 * 1e3, // 过期时间
      staleTime: 5 * 1e3, // 过期时间
      refetchOnMount: 'always',
    },
  },
});

function App() {
  const rulesMap = {
    isNullUndefined: (value: string) => {
      if (value === null || value === undefined) {
        return '不能为空！';
      }
      return '';
    },
    // isEmptyIsPhone: (value: string) => {
    // if (!value) {
    //   return 'value不能为空！';
    // }
    // if (!new RegExp(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/).test(value)) {
    //   return '请输入正确的手机号码！';
    // }
    // return '';
    // },
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider rulesMap={rulesMap}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
