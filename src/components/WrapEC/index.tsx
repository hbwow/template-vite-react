/*
 * @Description: 表单的展开收起组件
 */

import { useState, memo } from 'react';
import cx from 'classnames';

import { Button, Col, Row } from 'antd';
import { SEARCH_COL_SPAN, SEARCH_ROW_GUTTER, SEARCH_ROW_HEIGHT } from '@/utils/constants';

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

export interface IWrapECProps {
  children?: React.ReactNode;
  defaultShowRow?: number; // 默认展示几行
  openBtnsMoveDown?: boolean; // 展开后 按钮是否下移
  btnsMoveDown?: boolean; // 按钮是否下移
  isEc?: boolean; // 是否有展开按钮
  onSearch?: () => void;
  onReset?: () => void;
}

const WrapEC = memo(
  ({
    children,
    defaultShowRow = 1,
    openBtnsMoveDown = false,
    btnsMoveDown = false,
    onSearch,
    onReset,
    isEc = true,
  }: IWrapECProps) => {
    const [open, setOpen] = useState(false);

    const _height = open ? 'auto' : defaultShowRow * SEARCH_ROW_HEIGHT;

    return (
      <div>
        <div style={{ height: isEc ? _height : 'auto' }} className='overflow-hidden'>
          {children}
        </div>
        <Row
          gutter={SEARCH_ROW_GUTTER}
          style={{ marginTop: (open && openBtnsMoveDown) || btnsMoveDown ? 0 : -SEARCH_ROW_HEIGHT }}
        >
          <Col
            span={SEARCH_COL_SPAN}
            offset={SEARCH_COL_SPAN * 2}
            className='flex justify-end bg-white'
          >
            <Button className='mr-3' type='primary' onClick={onSearch}>
              查询
            </Button>
            <Button
              className={cx('', {
                'mr-3': isEc,
              })}
              onClick={onReset}
            >
              重置
            </Button>
            {isEc && (
              <Button
                type='link'
                onClick={() => {
                  setOpen(!open);
                }}
              >
                {!open && (
                  <div className='flex items-center'>
                    <span className='mr-2'>展开</span>
                    <RiArrowDownSLine className='text-16' />
                  </div>
                )}
                {open && (
                  <div className='flex items-center'>
                    <span className='mr-2'>收起</span>
                    <RiArrowUpSLine />
                  </div>
                )}
              </Button>
            )}
          </Col>
        </Row>
      </div>
    );
  },
);

export default WrapEC;
