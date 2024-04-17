/*
 * @Description: 包裹组件
 */

import cx from 'classnames';

type PropsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  wrapClassName?: string;
  style?: React.CSSProperties;
};

const WrapCard = (props: PropsType) => {
  const {
    title = '',
    children = '',
    footer = '',
    className = '',
    wrapClassName = '',
    extra,
  } = props;
  return (
    <div className={cx('bg-white p-16 rounded-8', wrapClassName)}>
      {/* 头部 */}
      {title || extra ? (
        <div className='h-[32px] pb-2 mb-16 flex items-center justify-between border-b-1 border-gray-100'>
          {/* 标题 */}
          <div className='text-16  font-medium	text-black-200'>{title}</div>
          {/* extra */}
          <div className='mb-12'>{extra}</div>
        </div>
      ) : (
        <></>
      )}

      {/* content */}
      {children ? <div className={cx('', className)}>{children}</div> : <></>}

      {/* footer */}
      {footer ? (
        <div className='pt-2 mt-16 flex flex-row justify-between  border-t-1 border-gray-100 text-black-100 text-sm	'>
          {footer}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default WrapCard;
