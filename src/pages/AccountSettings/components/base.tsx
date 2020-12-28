import { Button, Input, Select, Form, message } from 'antd';
import { connect, FormattedMessage, formatMessage } from 'umi';
import React, { Component } from 'react';

import { CurrentUser } from '../data.d';
import GeographicView from './GeographicView';
import PhoneView from './PhoneView';
import AvatarView from './avatar';

import styles from './BaseView.less';

const { Option } = Select;

interface SelectItem {
  label: string;
  key: string;
}

const validatorGeographic = (
  _: any,
  value: {
    province: SelectItem;
    city: SelectItem;
  },
  callback: (message?: string) => void,
) => {
  const { province, city } = value;
  if (!province.key) {
    callback('Please input your province!');
  }
  if (!city.key) {
    callback('Please input your city!');
  }
  callback();
};

const validatorPhone = (rule: any, value: string, callback: (message?: string) => void) => {
  const values = value.split('-');
  if (!values[0]) {
    callback('Please input your area code!');
  }
  if (!values[1]) {
    callback('Please input your phone number!');
  }
  callback();
};

interface BaseViewProps {
  currentUser?: CurrentUser;
}

class BaseView extends Component<BaseViewProps> {
  view: HTMLDivElement | undefined = undefined;

  getViewDom = (ref: HTMLDivElement) => {
    this.view = ref;
  };

  handleFinish = () => {
    message.success(formatMessage({ id: 'accountsettings.basic.update.success' }));
  };

  render() {
    const { currentUser } = this.props;

    return (
      <div className={styles.baseView} ref={this.getViewDom}>
        <div className={styles.left}>
          <Form
            layout="vertical"
            onFinish={this.handleFinish}
            initialValues={currentUser}
            hideRequiredMark
          >
            <Form.Item
              name="name"
              label={formatMessage({ id: 'accountsettings.basic.name' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'accountsettings.basic.name-message' }, {}),
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label={formatMessage({ id: 'accountsettings.basic.address' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'accountsettings.basic.address-message' }, {}),
                },
              ]}
            >
              <Input.TextArea
                placeholder={formatMessage({ id: 'accountsettings.basic.address-placeholder' })}
                rows={4}
              />
            </Form.Item>
            <Form.Item
              name="country"
              label={formatMessage({ id: 'accountsettings.basic.country' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'accountsettings.basic.country-message' }, {}),
                },
              ]}
            >
              <Select style={{ maxWidth: 220 }}>
                <Option value="India">India</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="geographic"
              label={formatMessage({ id: 'accountsettings.basic.geographic' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'accountsettings.basic.geographic-message' }, {}),
                },
                {
                  validator: validatorGeographic,
                },
              ]}
            >
              <GeographicView />
            </Form.Item>
            <Form.Item
              name="phone"
              label={formatMessage({ id: 'accountsettings.basic.phone' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'accountsettings.basic.phone-message' }, {}),
                },
                { validator: validatorPhone },
              ]}
            >
              <PhoneView />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                <FormattedMessage
                  id="accountsettings.basic.update"
                  defaultMessage="Update Information"
                />
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles.right}>
          <AvatarView />
        </div>
      </div>
    );
  }
}

export default connect(
  ({ accountSettings }: { accountSettings: { currentUser: CurrentUser } }) => ({
    currentUser: accountSettings.currentUser,
  }),
)(BaseView);
