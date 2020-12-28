import React from 'react';
import { Typography, Row, Col, Button, Input, Divider, Space } from 'antd';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled } from '@ant-design/icons';

const { Text } = Typography;

function index() {
  return (
    <div className="backGroundColor">
      <Row>
        <Col span={10}>
          <div className="backGroundTextMargin">
            <Text>
              <h2>Schedule a free</h2>
            </Text>
            <div>
              <Text>
                <h2>project overview today!</h2>
              </Text>
            </div>
          </div>
        </Col>
        <Col span={5} offset={5}>
          <div className="backGroundTextMargin">
            <Input size="large" placeholder="Email Id" className="cornerRadious" />
          </div>
        </Col>
        <Col span={4}>
          <div className="backGroundTextMargin">
            <Button type="primary" className="cornerRadious" size="large">
              Schedule Call
            </Button>
          </div>
        </Col>
      </Row>
      <Divider type="horizontal" className="divider" />
      <div className="footerMargin">
        <Row>
          <Col span={3}>
            <Space direction="vertical">
              <Text strong className="footerColor">
                Company
              </Text>
              <Text strong className="footerTextColor">
                {' '}
                About Us{' '}
              </Text>
              <Text strong className="footerTextColor">
                Contact Us{' '}
              </Text>
              <Text strong className="footerTextColor">
                Carrers{' '}
              </Text>
              <Text strong className="footerTextColor">
                Press
              </Text>
            </Space>
          </Col>
          <Col span={3} className="footerColor">
            <Space direction="vertical">
              <Text strong className="footerColor">
                Resources
              </Text>
              <Text strong className="footerTextColor">
                {' '}
                Web{' '}
              </Text>
              <Text strong className="footerTextColor">
                Applications{' '}
              </Text>
              <Text strong className="footerTextColor">
                Project Management
              </Text>
              <Text strong className="footerTextColor">
                Order fulfillment
              </Text>
            </Space>
          </Col>
          <Col span={4} offset={2} className="footerColor">
            <Space direction="vertical">
              <Text strong className="footerColor">
                Resources
              </Text>
              <Text strong className="footerTextColor">
                {' '}
                Marketing{' '}
              </Text>
              <Text strong className="footerTextColor">
                Seo{' '}
              </Text>
              <Text strong className="footerTextColor">
                Virtual Assitant
              </Text>
              <Text strong className="footerTextColor">
                Task
              </Text>
            </Space>
          </Col>
          <Col span={4} offset={2} className="footerColor">
            <Space direction="vertical">
              <Text strong className="footerColor">
                Services
              </Text>
              <Text strong className="footerTextColor">
                {' '}
                For clients{' '}
              </Text>
              <Text strong className="footerTextColor">
                Marketing
              </Text>
              <Text strong className="footerTextColor">
                For Venders{' '}
              </Text>
              <Text strong className="footerTextColor">
                Lead Generation
              </Text>
            </Space>
          </Col>
          <Col span={3} className="footerColor">
            <Space direction="vertical">
              <Text strong className="footerColor">
                Global
              </Text>
              <Text strong className="footerTextColor">
                {' '}
                Contact Us at{' '}
              </Text>
              <Text strong className="footerMail">
                support@admin.com{' '}
              </Text>
              <Text strong className="footerTextColor">
                <Space>
                  <Text className="footerTextColor">Follow us on:</Text>
                  <FacebookFilled />
                  <TwitterSquareFilled />
                  <LinkedinFilled />
                </Space>
              </Text>
            </Space>
          </Col>
        </Row>
      </div>
      <Divider type="horizontal" className="divider" />
    </div>
  );
}

export default index;
