import React from 'react';
import { Card, Typography, Col, Row, Space } from 'antd';
import AddMember from './addMember';
import './style.less';

const { Text, Title } = Typography;
function index() {
  return (
    <div>
      <Card>
        <div className="titleCenter">
          <Text strong>Project XYZ</Text>
        </div>
        <div className="border">
          <Row>
            <Col span={12}>
              <Title level={3}>Company1</Title>
              <div>
                <Text strong>
                  Country
                  <br />
                  Work hours
                </Text>
              </div>
            </Col>
            <Col span={12}>
              <Text strong>Team Chat:Link</Text>
              <div>
                <Text strong>Preferred method of communication :</Text>
              </div>
              <div>
                <Text strong>GBB, Email,Slack,Trello,Zoom,Whatsapp,etc</Text>
              </div>
            </Col>
          </Row>
          <div className="companyFontSize">Company1</div>
          <Space>
            <div className="circle" />
            <Text strong>Project Manager:Contact Info</Text>
          </Space>
          <div>
            <Space>
              <div className="circle" />
              <Text strong>Designer:Username-contact info(email,phone,Whatsapp,etc.)</Text>
            </Space>
          </div>
          <div>
            <Space>
              <div className="circle" />
              <Text strong>Developer:Username-contact info</Text>
            </Space>
          </div>
          <div className="companyFontSize">Internal Team</div>
          <div>
            <Space>
              <div className="circle" />
              <Text strong>Product Manager:Contact Info</Text>
            </Space>
          </div>
          <div>
            <Row>
              <Col span={12}>
                <Space>
                  <div className="circle" />
                  <Text strong>Lead:Username-contact info(email,phone,Whatsapp,etc.)</Text>
                </Space>
              </Col>
              <Col span={12}>
                <AddMember />
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default index;
