import React from 'react';
import { Row, Col, Space, Typography } from 'antd';
import ListView from './listView';

const { Text } = Typography;

function ListViewSecond() {
  return (
    <div>
      <ListView />
      <div className="border-margin">
        <Row>
          <Col span={20}>
            <Text strong> WeFillorders</Text>
            <div>
              <Space>
                <Text type="warning">Status:Out for bid</Text>
                <Text type="warning">Details</Text>
              </Space>
            </div>
          </Col>
          <Col span={3} offset={1}>
            Start:{new Date().toLocaleDateString()}
          </Col>
        </Row>
      </div>
      <div className="border-margin">
        <Row>
          <Col span={20}>
            <Text strong>Stalzer RE</Text>
            <div>
              <Space>
                <Text type="warning">Status:Draft</Text>
                <Text type="warning">Details</Text>
              </Space>
            </div>
          </Col>
          <Col span={3} offset={1}>
            Start:{new Date().toLocaleDateString()}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListViewSecond;
