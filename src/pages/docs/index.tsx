import {} from 'react';

import WrapPageContainer from '@/components/WrapPageContainer';
import WrapCard from '@/components/WrapCard';
import WrapEC from '@/components/WrapEC';
import { Button, Col, Form, Input, Row, Table } from 'antd';
import { Tips, ModalBtn, LeftRightBtns } from '@hbwow/components';

import { FIELD, SEARCH_COL_SPAN, SEARCH_ROW_GUTTER } from '@/utils/constants';
import { showTotal } from '@/utils/common';
import { useSearchAndTable } from '@hbwow/hooks';
import { useQuery } from '@tanstack/react-query';

/******** 复制后需删除 **********/
const useTemplate = () => {
  return useQuery({});
};
/******** 复制后需删除 **********/

const Page = () => {
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'xxx',
      dataIndex: 'x',
    },
    {
      title: 'xxx',
      dataIndex: 'x',
    },
    {
      title: 'xxx',
      dataIndex: 'x',
      render: () => {
        return <Tips tips='xxxxxxxx' icon='xxxx' />;
      },
    },
    {
      title: 'xxx',
      dataIndex: 'x',
      render: () => {
        return <Tips />;
      },
    },
    {
      title: '操作',
      width: 180,
      render: () => {
        return (
          <>
            <Button type='link'>编辑</Button>
            <ModalBtn>删除</ModalBtn>
          </>
        );
      },
    },
  ];

  //条件分页查询
  const {
    tableProps,
    paginationProps,
    defaultSearchFormValues,
    // queryReturn,
    onreset,
    onChangeSearchFormValues,
  } = useSearchAndTable({
    reactQuery: useTemplate,
    ...FIELD,
    form: form,
    columns: columns,
    defaultSearchFormValues: { xx: undefined },
    formatParams: (formValues: any) => {
      return formValues;
    },
  });

  const handleSearch = async () => {
    const result = await form.validateFields();

    onChangeSearchFormValues(result);
  };

  return (
    <WrapPageContainer
      header={{
        breadcrumb: {
          items: [
            {
              path: '',
              title: 'xxx',
            },
            {
              path: '',
              title: 'xxxxxx',
            },
          ],
        },
      }}
    >
      <WrapCard wrapClassName='mb-12'>
        <WrapEC isEc={false} btnsMoveDown onSearch={handleSearch} onReset={onreset}>
          <Form form={form} initialValues={defaultSearchFormValues}>
            <Row gutter={SEARCH_ROW_GUTTER}>
              <Col span={SEARCH_COL_SPAN}>
                <Form.Item name='xx' label='xxx'>
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </WrapEC>
      </WrapCard>

      <WrapCard>
        <LeftRightBtns
          className='mb-8'
          rightBtns={[
            {
              children: '新增',
              type: 'primary',
            },
          ]}
        />

        <Table
          {...tableProps}
          // /******** 复制后需删除 **********/
          dataSource={[...new Array(5)]}
          // /******** 复制后需删除 **********/
          pagination={{
            ...paginationProps,
            showTotal: showTotal,
          }}
        />
      </WrapCard>
    </WrapPageContainer>
  );
};

export default Page;
