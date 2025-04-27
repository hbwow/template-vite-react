/*
 * @Description: 包裹 PageContainer 组件
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash-es';

import { PageContainer, PageContainerProps } from '@ant-design/pro-components';
import { RiArrowLeftLine } from 'react-icons/ri';

function itemRender(item, params, items, paths) {
  const last = items.indexOf(item) === items.length - 1;
  return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
}

// https://procomponents.ant.design/components/page-container
const WrapPageContainer = memo((props: PageContainerProps) => {
  const defaultProps = {
    header: {
      style: { background: 'white' },
      backIcon: <RiArrowLeftLine className='text-20' />,
      breadcrumb: { itemRender: itemRender },
    },
  };
  const _props = merge(defaultProps, props);

  return (
    <PageContainer
      // header={{
      //   title: '',
      //   ghost: true,
      //   breadcrumb: {
      //     itemRender: itemRender,
      //     items: [
      //       {
      //         path: '',
      //         title: '当前页面',
      //       },
      //     ],
      //   },
      //   extra: [],
      // }}
      // content=''
      // tabBarExtraContent=''
      // tabList={[]}
      // tabProps={{}}
      // footer={[]}

      {..._props}
    >
      <div className='mt-12'>{props.children}</div>
    </PageContainer>
  );
});

export default WrapPageContainer;
