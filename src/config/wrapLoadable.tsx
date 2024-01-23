import loadable from '@loadable/component';
import { Skeleton } from 'antd';

const wrapLoadable = (dynamic: any) => {
  return loadable(dynamic, {
    fallback: <Skeleton active />,
  });
};

export default wrapLoadable;
