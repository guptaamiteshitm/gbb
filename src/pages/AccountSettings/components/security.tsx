/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/no-access-state-in-setstate */

import { FormattedMessage, formatMessage } from 'umi';
import React, { Component } from 'react';
import { List, Form, Input, Button, message } from 'antd';
import { FormInstance } from 'antd/lib/form';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: (
    <span className="strong">
      <FormattedMessage id="accountsettings.security.strong" defaultMessage="Strong" />
    </span>
  ),
  medium: (
    <span className="medium">
      <FormattedMessage id="accountsettings.security.medium" defaultMessage="Medium" />
    </span>
  ),
  weak: (
    <span className="weak">
      <FormattedMessage id="accountsettings.security.weak" defaultMessage="Weak" />
      Weak
    </span>
  ),
};
class SecurityView extends Component {
  formRef = React.createRef<FormInstance>();

  state = {
    hidePassword: false,
  };

  handleClick = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  handleSubmit = () => {
    this.formRef.current.resetFields();

    if (this.state.hidePassword) {
      this.setState({ hidePassword: !this.state.hidePassword });
      message.success('Form successfully submit');
    }
  };

  getData = () => [
    {
      title: formatMessage({ id: 'accountsettings.security.password' }, {}),
      description: (
        <>
          {formatMessage({ id: 'accountsettings.security.password-description' })}：
          {passwordStrength.strong}
        </>
      ),
      actions: [
        <a key="Modify" onClick={this.handleClick}>
          <FormattedMessage id="accountsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
    {
      title: formatMessage({ id: 'accountsettings.security.email' }, {}),
      description: `${formatMessage(
        { id: 'accountsettings.security.email-description' },
        {},
      )}：ant***sign.com`,
      actions: [
        <a key="Modify">
          <FormattedMessage id="accountsettings.security.modify" defaultMessage="Modify" />
        </a>,
      ],
    },
  ];

  render() {
    const data = this.getData();
    return (
      <>
        <Form name="register" ref={this.formRef} layout="vertical" onFinish={this.handleSubmit}>
          {this.state.hidePassword ? (
            <div>
              <List>
                <List.Item>
                  <Form.Item
                    name="Expassword"
                    label={formatMessage({ id: 'accountsettings.security.existingPassword' })}
                    rules={[
                      {
                        required: true,
                        message: formatMessage({ id: 'accountsettings.security.passMessage' }, {}),
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </List.Item>
                <List.Item>
                  <Form.Item
                    name="password"
                    label={formatMessage({ id: 'accountsettings.security.newPassword' })}
                    rules={[
                      {
                        required: true,
                        message: formatMessage(
                          { id: 'accountsettings.security.newPassMessage' },
                          {},
                        ),
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </List.Item>
                <List.Item>
                  <Form.Item
                    name="confirm"
                    label={formatMessage({ id: 'accountsettings.security.confirmPassword' })}
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: formatMessage(
                          { id: 'accountsettings.security.confirmPassMessage' },
                          {},
                        ),
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            formatMessage(
                              { id: 'accountsettings.security.confirmNotMatchMessage' },
                              {},
                            ),
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </List.Item>
              </List>
            </div>
          ) : null}
          <List<Unpacked<typeof data>>
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item actions={item.actions}>
                <List.Item.Meta title={item.title} description={item.description} />
              </List.Item>
            )}
          />
          {this.state.hidePassword ? (
            <List.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  <FormattedMessage id="accountsettings.security.submit" />
                </Button>
              </Form.Item>
            </List.Item>
          ) : null}
        </Form>
      </>
    );
  }
}

export default SecurityView;
