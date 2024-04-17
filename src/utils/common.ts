import { createSearchParams } from 'react-router-dom';

// 用于显示数据总量和当前数据顺序
export const showTotal = (
  total: number,
  // range
) => {
  return `共 ${total} 条记录`;
};

// navigate 传 query
export const formatSearch = (obj: Record<string, any>) => {
  return createSearchParams({ ...obj }).toString();
};
