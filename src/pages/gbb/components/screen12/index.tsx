import { Card, Row, Col, Typography, Button } from 'antd';
import React from 'react';
import './style.less';

const { Title, Text } = Typography;

function index() {
  return (
    <div>
      <Card>
        <div className="border">
          <Row>
            <Col span={11}>
              <Title level={3}>Need Apps Co.</Title>
            </Col>
            <Col span={13}>
              <Text strong>Rating:5 star(3 reviews)</Text>
              <div>
                <Text strong>Projects:2 link Tree with examples</Text>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <Text strong>Services</Text>
              <div>
                <Text strong>Services1</Text>
              </div>
              <div>
                <Text strong>Services2</Text>
              </div>
              <div>
                <Text strong>Services3</Text>
              </div>
            </Col>
            <Col span={4}>
              <Text strong>Website.com</Text>
              <div>
                <Button type="primary" className="scheduleButton" shape="round">
                  Schedule Call
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}

export default index;
