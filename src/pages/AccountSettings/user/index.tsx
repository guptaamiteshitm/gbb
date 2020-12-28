import { DownOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { FormattedMessage, formatMessage } from 'umi';

import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import { UserListItem } from './data.d';
import { queryReminder, updateUser, addUser, removeUser } from './service';

/**
 *Add node
 * @param fields
 */
const HandleAdd = async (fields: UserListItem) => {
  const hide = message.loading('Adding');
  try {
    await addUser({ ...fields });
    hide();
    message.success(formatMessage({ id: 'submit.add.success' }));
    return true;
  } catch (error) {
    hide();
    message.error(formatMessage({ id: 'submit.add.error' }));
    return false;
  }
};

/**
 * Update node
 * @param fields
 */
const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('Configuring');
  try {
    await updateUser({
      userName: fields.userName,
      contact: fields.contact,
      company: fields.company,
      tax: fields.tax,
      address: fields.address,
      status: fields.status,
      key: fields.key,
    });
    hide();

    message.success('Configuration is successful!');
    return true;
  } catch (error) {
    hide();
    message.error('Configuration failed, please try again!');
    return false;
  }
};

/**
 *  Delete node
 * @param selectedRows
 */
const HandleRemove = async (selectedRows: UserListItem[]) => {
  const hide = message.loading('deleting');
  if (!selectedRows) return true;
  try {
    await removeUser({
      key: selectedRows.map((row) => row.key),
    });
    hide();
    message.success('Deleted successfully, will refresh soon');
    return true;
  } catch (error) {
    hide();
    message.error('Delete failed, please try again');
    return false;
  }
};

const ReminderList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);
  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<UserListItem>[] = [
    {
      title: formatMessage({ id: 'user.name' }),
      dataIndex: 'userName',
      sorter: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: `${formatMessage({ id: 'user.name' })}  ${formatMessage({
              id: 'validate.required',
            })}`,
          },
        ],
      },
    },
    {
      title: formatMessage({ id: 'user.company' }),
      dataIndex: 'company',
      sorter: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: `${formatMessage({ id: 'user.company' })}  ${formatMessage({
              id: 'validate.required',
            })}`,
          },
        ],
      },
    },

    {
      title: formatMessage({ id: 'user.address' }),
      dataIndex: 'address',
      sorter: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: `${formatMessage({
              id: 'user.address',
            })}  ${formatMessage({
              id: 'validate.required',
            })}`,
          },
        ],
      },
    },
    {
      title: formatMessage({ id: 'user.tax' }),
      dataIndex: 'tax',
      sorter: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: `${formatMessage({
              id: 'user.tax',
            })}  ${formatMessage({
              id: 'validate.required',
            })}`,
          },
        ],
      },
    },
    {
      title: formatMessage({ id: 'user.contact' }),
      dataIndex: 'contact',
      sorter: true,
      formItemProps: {
        rules: [
          {
            required: true,
            message: `${formatMessage({
              id: 'user.contact',
            })}  ${formatMessage({
              id: 'validate.required',
            })}`,
          },
        ],
      },
    },

    {
      title: formatMessage({ id: 'validate.operation' }),
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            <EditOutlined />
          </a>
          <Divider type="vertical" />
        </>
      ),
    },
  ];
  return (
    <PageHeaderWrapper>
      <ProTable<UserListItem>
        headerTitle={<FormattedMessage id="user" />}
        actionRef={actionRef}
        rowKey="key"
        toolBarRender={(action, { selectedRows }) => [
          <Button type="primary" onClick={() => handleModalVisible(true)}>
            <PlusOutlined />
            <FormattedMessage id="validate.newButton" />
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async (e) => {
                    if (e.key === 'remove') {
                      await HandleRemove(selectedRows);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">batch deletion</Menu.Item>
                  <Menu.Item key="approval">Batch approval</Menu.Item>
                </Menu>
              }
            >
              <Button>
                Batch operation <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          <div>
            chosen <a style={{ fontWeight: 600 }}>{selectedRowKeys.length}</a> item&nbsp;&nbsp;
            <span>
              Total number of service calls{' '}
              {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} Ten thousand
            </span>
          </div>
        )}
        request={async (params, sorter, filter) => {
          const result = await queryReminder({ ...params, sorter, filter });

          return result;
        }}
        columns={columns}
        rowSelection={{}}
      />
      <CreateForm onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible}>
        <ProTable<UserListItem, UserListItem>
          onSubmit={async (value) => {
            const success = await HandleAdd(value);
            if (success) {
              handleModalVisible(false);
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          rowKey="key"
          type="form"
          columns={columns}
          rowSelection={{}}
        />
      </CreateForm>
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async (value) => {
            const success = await handleUpdate(value);
            if (success) {
              handleUpdateModalVisible(false);
              setStepFormValues({});
              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
    </PageHeaderWrapper>
  );
};

export default ReminderList;
