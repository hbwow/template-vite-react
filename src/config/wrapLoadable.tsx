import loadable from '@loadable/component';
import { Skeleton } from 'antd';

export const wrapLoadableStyle = {
  padding: '32px 40px',
};

const wrapLoadable = (dynamic: any) => {
  return loadable(dynamic, {
    fallback: <Skeleton active style={{ ...wrapLoadableStyle }} />,
  });
};

export default wrapLoadable;
