// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
  },
  locale: {
    // default zh-CN
    default: 'en-US',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      // this path is not shown in menu
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      name: 'dashboard',
      icon: 'AccountBookOutlined',
      path: '/dashboard',
      component: './dashboard',
    },
    {
      name: 'signUp',
      icon: 'AccountBookOutlined',
      path: '/signup',
      component: './signUp',
    },
    {
      path: '/account',
      authority: ['user', 'admin'],
      routes: [
        {
          name: 'account.settings',
          icon: 'AccountBookOutlined',
          path: '/account/settings',
          component: './AccountSettings',
        },
        {
          name: 'account.user',
          icon: 'AccountBookOutlined',
          path: '/account/user',
          component: './AccountSettings/user',
        },
      ],
    },

    {
      name: 'gbb',
      icon: 'FileTextOutlined',
      path: '/gbb',
      access: 'canAdmin',
      authority: ['gbb', 'admin'],
      routes: [
        {
          name: 'screen9',
          icon: 'FileTextOutlined',
          path: '/gbb',
          component: './gbb',
        },
        {
          name: 'screen10',
          icon: 'FileTextOutlined',
          path: '/gbb/screen10',
          component: './gbb/components/screen10',
        },
        {
          name: 'screen14',
          icon: 'FileTextOutlined',
          path: '/gbb/screen14',
          component: './gbb/components/screen14',
        },
        {
          name: 'screen13',
          icon: 'FileTextOutlined',
          path: '/gbb/screen13',
          component: './gbb/components/screen13',
        },
        {
          name: 'screen16',
          icon: 'FileTextOutlined',
          path: '/gbb/screen16',
          component: './gbb/components/screen16',
        },
        {
          name: 'screen12',
          icon: 'FileTextOutlined',
          path: '/gbb/screen12',
          component: './gbb/components/screen12',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
