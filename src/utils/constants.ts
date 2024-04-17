import { FormLayout } from 'antd/es/form/Form';

// 搜索表单 row col 的值
export const SEARCH_ROW_GUTTER = 30;
export const SEARCH_COL_SPAN = 8;
export const SEARCH_ROW_HEIGHT = 56;

// 展示
export const DISPLAY_COL_SPAN = 6;

// useSearchAndTable => field
export const FIELD = {
  fieldNames: {
    page: 'pageNumber',
    pageSize: 'pageSize',
    dataSource: 'data',
    total: 'totalRecords',
    current: 'currentPage',
    size: 'pageSize',
  },
};

// Modal 组件默认值
export const DEFAULT_MODAL_VALUE = {
  width: '800px',
  destroyOnClose: true,
  maskClosable: false,
  keyboard: false,
};

// Form 组件默认值
export const DEFAULT_BASE_FORM_VALUE: {
  layout: FormLayout;
} = {
  layout: 'vertical',
};

// Form modal 组件默认值
export const DEFAULT_MODAL_FORM__VALUE: {
  layout: FormLayout;
  preserve: boolean;
} = {
  ...DEFAULT_BASE_FORM_VALUE,
  preserve: false,
};

// 持久化的 react-query config
export const INFINITY_QUERY_CONFIG = {
  staleTime: Infinity,
  cacheTime: Infinity,
  refetchOnMount: false,
};
