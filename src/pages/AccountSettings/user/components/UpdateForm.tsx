import React, { useState } from 'react';
import { Form, Button, Input, Modal } from 'antd';
import { FormattedMessage, useIntl } from 'umi';
import { UserListItem } from '../data.d';

export interface FormValueType extends Partial<UserListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<UserListItem>;
}
const FormItem = Form.Item;

export interface UpdateFormState {
  formVals: FormValueType;
  currentUser: number;
}

const formLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 13 },
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    userName: props.values.userName,
    tax: props.values.tax,
    contact: props.values.contact,
    company: props.values.company,
    address: props.values.address,
    status: props.values.status,
    key: props.values.key,
    target: '0',
    template: '0',
    type: '1',
    time: '',
    frequency: 'month',
  });
  const intl = useIntl();
  const [currentUser, setCurrentUser] = useState<number>(0);

  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;

  const forward = () => setCurrentUser(currentUser + 1);

  const handleOk = async () => {
    const fieldsValue = await form.validateFields();

    setFormVals({ ...formVals, ...fieldsValue });

    if (currentUser < 2) {
      forward();
    } else {
      handleUpdate({ ...formVals, ...fieldsValue });
    }
  };

  const renderContent = () => {
    return (
      <>
        <FormItem
          name="userName"
          label={intl.formatMessage({ id: 'user.name' })}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({ id: 'user.name' })}  ${intl.formatMessage({
                id: 'validate.required',
              })}`,
            },
          ]}
        >
          <Input
            placeholder={`${intl.formatMessage({
              id: 'validate.placeholder',
            })} ${intl.formatMessage({
              id: 'user.name',
            })}`}
          />
        </FormItem>
        <FormItem
          name="company"
          label={intl.formatMessage({ id: 'user.company' })}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({ id: 'user.company' })}  ${intl.formatMessage({
                id: 'validate.required',
              })}`,
            },
          ]}
        >
          <Input
            placeholder={`${intl.formatMessage({
              id: 'validate.placeholder',
            })} ${intl.formatMessage({
              id: 'user.company',
            })}`}
          />
        </FormItem>
        <FormItem
          name="address"
          label={intl.formatMessage({ id: 'user.address' })}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({ id: 'user.address' })}  ${intl.formatMessage({
                id: 'validate.required',
              })}`,
            },
          ]}
        >
          <Input
            placeholder={`${intl.formatMessage({
              id: 'validate.placeholder',
            })} ${intl.formatMessage({
              id: 'user.address',
            })}`}
          />
        </FormItem>
        <FormItem
          name="tax"
          label={intl.formatMessage({ id: 'user.tax' })}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({ id: 'user.tax' })}  ${intl.formatMessage({
                id: 'validate.required',
              })}`,
            },
          ]}
        >
          <Input
            placeholder={`${intl.formatMessage({
              id: 'validate.placeholder',
            })} ${intl.formatMessage({
              id: 'user.tax',
            })}`}
          />
        </FormItem>
        <FormItem
          name="contact"
          label={intl.formatMessage({ id: 'user.contact' })}
          rules={[
            {
              required: true,
              message: `${intl.formatMessage({ id: 'user.contact' })}  ${intl.formatMessage({
                id: 'validate.required',
              })}`,
            },
          ]}
        >
          <Input
            placeholder={`${intl.formatMessage({
              id: 'validate.placeholder',
            })} ${intl.formatMessage({
              id: 'user.contact',
            })}`}
          />
        </FormItem>
      </>
    );
  };
  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>Cancel</Button>
        <Button type="primary" onClick={() => handleOk()}>
          OK
        </Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title={<FormattedMessage id="user.title.userConfig" />}
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible()}
    >
      <Form
        {...formLayout}
        form={form}
        initialValues={{
          ...formVals,
        }}
      >
        {renderContent()}
      </Form>
    </Modal>
  );
};

export default UpdateForm;
