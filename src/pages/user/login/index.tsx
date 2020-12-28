import { Alert, Checkbox, message } from 'antd';
import React, { useState } from 'react';
import { Link, SelectLang, useModel, history, History, formatMessage, FormattedMessage } from 'umi';
// import logo from '@/assets/logo.svg';
import { LoginParamsType, fakeAccountLogin } from '@/services/login';
import LoginFrom from './components/Login';
import styles from './style.less';

const { Tab, Username, Password, Mobile, Captcha, Submit } = LoginFrom;

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

/**
 * This method will jump to the location of the redirect parameter
 */
const replaceGoto = () => {
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as { redirect: string };
    if (!redirect) {
      history.replace('/');
      return;
    }
    (history as History).replace(redirect);
  }, 10);
};

const Login: React.FC<{}> = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const [submitting, setSubmitting] = useState(false);
  const { initialState, setInitialState } = useModel('@@initialState');
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');
  const handleSubmit = async (values: LoginParamsType) => {
    setSubmitting(true);
    try {
      // log in
      const msg = await fakeAccountLogin({ ...values, type });
      if (msg.status === 'ok' && initialState) {
        message.success(formatMessage({ id: 'user.login.succes' }));
        const currentUser = await initialState?.fetchUserInfo();
        setInitialState({
          ...initialState,
          currentUser,
        });
        replaceGoto();
        return;
      }
      // If it fails, set the user error message
      setUserLoginState(msg);
    } catch (error) {
      message.error(formatMessage({ id: 'user.login.error' }));
    }
    setSubmitting(false);
  };

  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.lang}>
        <SelectLang />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              {/* <img alt="logo" className={styles.logo} src="http://web.lionparcel.com/img/lion_parcel_logo.1e3c7314.png" /> */}
              <span className={styles.title}>
                {' '}
                <FormattedMessage id="user.login.title" />{' '}
              </span>
            </Link>
          </div>
          <div className={styles.desc}>Send to any city without worrying for long</div>
        </div>

        <div className={styles.main}>
          <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
            <Tab key="account" tab={<FormattedMessage id="user.login.tab.accountPasswordLogin" />}>
              {status === 'error' && loginType === 'account' && !submitting && (
                <LoginMessage content={formatMessage({ id: 'user.login.tab.error' })} />
              )}

              <Username
                name="username"
                placeholder={formatMessage({ id: 'user.login.username.placeholder' })}
                rules={[
                  {
                    required: true,
                    message: `${formatMessage({ id: 'validate.message' })}  ${formatMessage({
                      id: 'validate.user',
                    })}`,
                  },
                ]}
              />
              <Password
                name="password"
                placeholder={formatMessage({ id: 'user.login.password.placeholder' })}
                rules={[
                  {
                    required: true,
                    message: `${formatMessage({ id: 'validate.message' })}  ${formatMessage({
                      id: 'validate.password',
                    })}`,
                  },
                ]}
              />
            </Tab>
            <Tab key="mobile" tab={<FormattedMessage id="user.login.tab.phoneLogin" />}>
              {status === 'error' && loginType === 'mobile' && !submitting && (
                <LoginMessage content={formatMessage({ id: 'user.login.tab.codeError' })} />
              )}
              <Mobile
                name="mobile"
                placeholder={formatMessage({ id: 'user.login.mobile.placeholder' })}
                rules={[
                  {
                    required: true,
                    message: `${formatMessage({ id: 'validate.message' })}  ${formatMessage({
                      id: 'validate.phone',
                    })}`,
                  },
                  {
                    pattern: /\d{10}$/,
                    message: formatMessage({ id: 'user.login.phone.malformed' }),
                  },
                ]}
              />
              <Captcha
                name="captcha"
                placeholder={formatMessage({ id: 'validate.placeholder.captcha' })}
                countDown={120}
                getCaptchaButtonText=""
                getCaptchaSecondText="second"
                rules={[
                  {
                    required: true,
                    message: `${formatMessage({ id: 'validate.message' })}  ${formatMessage({
                      id: 'validate.varificationCode',
                    })}`,
                  },
                ]}
              />
            </Tab>
            <div>
              <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
                <FormattedMessage id="user.login.autoLogin" />
              </Checkbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                <FormattedMessage id="user.login.forgetPassword" />
              </a>
            </div>
            <Submit loading={submitting}>
              <FormattedMessage id="user.login.logIn" />
            </Submit>
          </LoginFrom>
        </div>
      </div>
    </div>
  );
};

export default Login;
