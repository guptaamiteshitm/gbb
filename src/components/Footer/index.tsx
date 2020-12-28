import React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2020 GBB"
    links={[
      {
        key: 'GBB',
        title: 'GBB',
        href: 'https://gbb.com',
        blankTarget: true,
      },
      // {
      //   key: 'github',
      //   title: <GithubOutlined />,
      //   href: 'https://github.com/ant-design/ant-design-pro',
      //   blankTarget: true,
      // },
      // {
      //   key: 'Ant Design',
      //   title: 'Ant Design',
      //   href: 'https://ant.design',
      //   blankTarget: true,
      // },
    ]}
  />
);
