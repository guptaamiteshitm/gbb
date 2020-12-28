import React from 'react';
import { Typography, Row, Col, Space, Steps } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import './style.less';

const { Text, Title } = Typography;
const { Step } = Steps;

function ListView() {
  return (
    <div>
      <div className="border">
        <Row>
          <Col span={2}>
            {' '}
            <Text strong>GBB</Text>
          </Col>
          <Col span={3}>
            {' '}
            <Text type="warning">Status:OnTime</Text>
          </Col>
          <Col span={15}>
            <Text type="warning">Details</Text>
          </Col>
          <Col span={1}>
            <BellOutlined />
          </Col>
          <Col span={2}>Start:{new Date().toLocaleDateString()}</Col>
        </Row>
        <div className="marginTop">
          <Row>
            <Col span={7} offset={1}>
              <Title level={5} className="header">
                In Progress:
              </Title>
              <div>
                <Space>
                  <Text>1.Wireframe</Text>
                  <Text type="warning">my task</Text>
                </Space>
                <div>
                  {' '}
                  <Text type="warning">Link:reviewwork.com</Text>
                </div>
              </div>
              <div>
                <Text>2.Photos Gathered</Text>
                <div>
                  <Text type="warning">Owners name</Text>
                </div>
                <div>
                  <Text>more+</Text>
                </div>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <Title level={5} className="header">
                Next Milestones
              </Title>
              <div>
                <Text>
                  {new Date().toLocaleDateString()} Website quotes prepared
                  <br />
                  10/1/20 Website started
                  <br />
                  10/15/20 Website prototype{' '}
                </Text>
                <div>
                  <Text>more+</Text>
                </div>
              </div>
            </Col>
            <Col span={7} offset={1}>
              <Title level={5} className="header">
                Notes:
              </Title>
              <div>
                Waiting on designer.Review <br />
                scheduled 9/10/20
                <div>
                  <Text strong>Zoom Link</Text>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={7} />
            <Col span={10}>
              <Steps size="small" current={1}>
                <Step title="Start" />
                <Step title="In Progress" />
                <Step title="Waiting" />
              </Steps>
              ,
            </Col>
            <Col span={6} offset={1}>
              <Text strong>
                Do this for me!
                <br />
                Learn More
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ListView;
