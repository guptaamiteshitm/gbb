import React from 'react';
import {
  Row,
  Col,
  Typography,
  Button,
  Calendar,
  Card,
  Space,
  Badge,
  Descriptions,
  Progress,
  Tooltip,
  Avatar,
  // Image,
  List,
} from 'antd';

import { MoreOutlined } from '@ant-design/icons';
import Footer from './footer';
import { data } from './data.d';
import './style.less';

const { Text, Title } = Typography;
const { Meta } = Card;

function index() {
  return (
    <div>
      <Row>
        <Col span={20}>
          <Text>
            <h2>Welcome to Dashboard</h2>
          </Text>
        </Col>
        <Col span={3} offset={1}>
          <Button type="primary">+ Add New Task</Button>
        </Col>
      </Row>
      <div>
        <Row>
          <Col span={16}>
            <div className="imageBackground">
              <div className="paraGraph">
                <Text>
                  <h4>John Doe !</h4>
                </Text>
              </div>
              <div className="textCenter">
                <Text strong>
                  <p>
                    {' '}
                    You have two projects to finish,you had completed{' '}
                    <Text type="warning">57%</Text> from your monthly level, Keep going to your
                    level
                  </p>
                </Text>
              </div>
            </div>
            <div className="heading">
              <Text>
                <h3>Active Projects</h3>
              </Text>
            </div>
            <Space>
              <Card
                title="Project Name"
                bordered={false}
                style={{ width: 255 }}
                className="calendarCard"
                extra={
                  <Tooltip placement="topLeft" title="follow">
                    <MoreOutlined key="more" />
                  </Tooltip>
                }
              >
                <p>
                  Status:
                  <Text type="success" strong>
                    {' '}
                    Active
                  </Text>
                </p>
                <Title level={4}>DIFM</Title>
                <Text strong type="success">
                  {' '}
                  55 %{' '}
                </Text>
                <Text>Completed</Text>
              </Card>
              <Card
                title="Project Name"
                bordered={false}
                style={{ width: 255 }}
                className="calendarCard"
                extra={
                  <Tooltip placement="topLeft" title="follow">
                    <MoreOutlined key="more" />
                  </Tooltip>
                }
              >
                <p>
                  Status:
                  <Text type="warning" strong>
                    {' '}
                    Hold
                  </Text>
                </p>
                <Title level={4}>DIFM</Title>
                <Text strong type="success">
                  {' '}
                  55 %{' '}
                </Text>
                <Text>Completed</Text>
              </Card>
              <Card
                title="Project Name"
                bordered={false}
                style={{ width: 255 }}
                className="calendarCard"
                extra={
                  <Tooltip placement="topLeft" title="follow">
                    <MoreOutlined key="more" />
                  </Tooltip>
                }
              >
                <p>
                  Status:
                  <Text type="success" strong>
                    {' '}
                    Active
                  </Text>
                </p>
                <Title level={4}>DIFM</Title>
                <Text strong type="success">
                  {' '}
                  55 %{' '}
                </Text>
                <Text>Completed</Text>
              </Card>
            </Space>
          </Col>
          <Col span={8}>
            <Card title="Active Task" className="calendarCard">
              <Calendar fullscreen={false} />
            </Card>
          </Col>
        </Row>
        {/* -----------------------------------first row completed-------------------------- */}
        <div className="heading">
          <Text>
            <h3>Invoices</h3>
          </Text>
        </div>
        <Row>
          <Col span={16}>
            <div className="divWidth">
              <Row>
                <Col span={12}>
                  <Card
                    title="Project Name"
                    bordered={false}
                    style={{ width: 360 }}
                    className="calendarCard"
                    extra={
                      <Space>
                        <Descriptions.Item label="Status" span={3}>
                          <Badge status="processing" text="Project" />
                        </Descriptions.Item>
                        <span> Inprogress</span>
                      </Space>
                    }
                  >
                    <div style={{ marginBottom: 10 }}>
                      <Text>UX UI & Backend Development</Text>
                    </div>
                    <Row>
                      <Col span={14}>
                        <div>
                          <Text strong>Project-Budget</Text>
                        </div>
                        <div>
                          <Title level={3} type="success">
                            $5240
                          </Title>
                        </div>
                        <div>
                          <Text strong>May 28-Jun 01 (2018)</Text>
                        </div>
                      </Col>
                      <Col span={10}>
                        <Progress type="circle" percent={75} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card
                    title="Project Name"
                    bordered={false}
                    style={{ width: 360 }}
                    className="calendarCard"
                    extra={
                      <Space>
                        <Descriptions.Item label="Status" span={3}>
                          <Badge status="processing" text="Project" />
                        </Descriptions.Item>
                        <span> Inprogress</span>
                      </Space>
                    }
                  >
                    <div style={{ marginBottom: 10 }}>
                      <Text>UX UI & Backend Development</Text>
                    </div>
                    <Row>
                      <Col span={14}>
                        <div>
                          <Text strong>Project-Budget</Text>
                        </div>
                        <div>
                          <Title level={3} type="success">
                            $5240
                          </Title>
                        </div>
                        <div>
                          <Text strong>May 28-Jun 01 (2018)</Text>
                        </div>
                      </Col>
                      <Col span={10}>
                        <Progress type="circle" percent={75} />
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <div className="leftHeading">
                  <Text>
                    <h3>Project out for Bid</h3>
                  </Text>
                  <Space>
                    <Card className="leftCard" cover={<Meta title="ABCD Insfratucture Ltd." />}>
                      <div style={{ textAlign: 'center' }}>
                        <Text>Last Bid:</Text>
                        <Text type="success">21 oct</Text>
                        <div>
                          <Text>
                            <h3>$5234</h3>
                          </Text>
                        </div>
                      </div>
                      <div>
                        <Progress percent={60} />
                      </div>
                    </Card>
                    <Card className="rightCard" cover={<Meta title="ABCD Insfratucture Ltd." />}>
                      <div style={{ textAlign: 'center' }}>
                        <Text>Last Bid:</Text>
                        <Text type="success">21 oct</Text>
                        <div>
                          <Text>
                            <h3>$5234</h3>
                          </Text>
                        </div>
                      </div>
                      <div>
                        <Progress percent={60} status="exception" />
                      </div>
                    </Card>
                  </Space>
                </div>
              </Row>
            </div>
          </Col>
          <Col span={8}>
            <Card
              title="COMPLETED PROJECTS"
              bordered={false}
              style={{ width: 440 }}
              className="calendarCard"
            >
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
                      title={<Title level={4}>{item.title}</Title>}
                      description="Web Development"
                    />
                    <Space direction="vertical">
                      <div>
                        <Title level={4}>$1234</Title>
                      </div>
                      <div>
                        <Text>12 Jan 2020</Text>
                      </div>
                    </Space>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default index;
