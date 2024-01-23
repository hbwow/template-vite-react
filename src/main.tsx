import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { StyleProvider } from '@ant-design/cssinjs';
import { Button } from 'antd';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyleProvider hashPriority='high'>
      {/* 👇 解决一些莫名其妙的antd样式问题，目前排查到的是HandleInterceptorCode里面用了antd model */}
      <Button type='primary' className='absolute h-0 p-0 w-0 border-0' />
      <App />
    </StyleProvider>
  </React.StrictMode>,
);
