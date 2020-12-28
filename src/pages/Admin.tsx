import React from 'react';
import { Card, Alert } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

export default (): React.ReactNode => (
  <PageContainer content=" This page can only be viewed with admin permissions">
    <Card>
      <Alert
        message="Umi ui has been released, welcome to use npm run ui to start the experience."
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 48,
        }}
      />
      
    </Card>
    <p style={{ textAlign: 'center', marginTop: 24 }}>
      Want to add more pages? Please refer to{' '}
      <a href="https://pro.ant.design/docs/block-cn" target="_blank" rel="noopener noreferrer">
        use block
      </a>
      。
    </p>
  </PageContainer>
);
