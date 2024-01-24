import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleProvider } from '@ant-design/cssinjs';
import { HandleInterceptorCodeCom } from '@hbwow/utils';
import { ConfigProvider } from 'antd';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority='high'>
      <ConfigProvider
        theme={{
          token: {
            // colorPrimary: '#00b96b',
            // colorInfo: '#00b96b',
          },
        }}
      >
        <App />
        <HandleInterceptorCodeCom />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>,
);
