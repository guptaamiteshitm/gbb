import { Card, Row, Col, Typography, Space, Collapse } from 'antd';
import React from 'react';
import './style.less';

const { Text, Title, Paragraph } = Typography;
const { Panel } = Collapse;

function Index() {
  return (
    <div>
      <Card>
        <div className="border">
          <Row>
            <Col span={8}>
              <Space>
                <Text strong>Wireframe</Text>
                <Text type="warning">my task</Text>
              </Space>
              <div>
                <Text> Link :</Text>
                <Text type="warning"> reviewwork.com</Text>
              </div>
            </Col>
            <Col span={6} offset="2">
              <Text type="warning">Status:OnTime</Text>
            </Col>
            <Col span={4} offset="4">
              <Text>Due:9/10/2020</Text>
              <div>
                <Text>My Team</Text>
              </div>
            </Col>
          </Row>
          <div className="detailsText">
            <Title level={5}>Details</Title>
          </div>
          <div className="paragraphText">
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages,and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>
            <div>
              <Title level={4}>Deliverables/Task</Title>
            </div>
            <Space direction="vertical" className="spaceWidth">
              <div className="rectangleText">
                <Title type="warning" level={4}>
                  Get Examples from client
                </Title>
              </div>
              <div className="rectangleText">
                <Title type="warning" level={4}>
                  Approve Theme
                </Title>
              </div>
              <Row>
                <Col span={9} offset={9}>
                  <Space>
                    <Title level={5}>Comments</Title>
                    <Title level={5}>Attachments</Title>
                  </Space>
                </Col>
                <Col span={4} offset={2}>
                  <Title level={4} type="warning">
                    Add attachment
                  </Title>
                  <Space>
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <Space>
                    <div className="circle" />
                    <Title level={5}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,set diam nonumy
                    </Title>
                  </Space>
                </Col>
                <Col span={4} offset={4}>
                  <Space>
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                  </Space>
                </Col>
              </Row>
            </Space>
            <div className="commentCenter">
              <Text type="warning" strong>
                Add Comment
              </Text>
            </div>
          </div>
        </div>
        {/* ------------------------------------first card End------------------------------------ */}
        <div className="Secondborder">
          <Row>
            <Col span={8}>
              <Space>
                <Text strong>Photos Gathered</Text>
                <Text type="warning">owners name</Text>
              </Space>
              <div>
                <Text strong>Link :</Text>
                <Text type="warning"> reviewwork.com</Text>
              </div>
            </Col>
            <Col span={6} offset="2">
              <Text type="warning">Status:OnTime</Text>
            </Col>
            <Col span={4} offset="4">
              <Text>Due:9/10/2020</Text>
            </Col>
          </Row>
          <div className="detailsText">
            <Title level={5}>Details</Title>
          </div>
          <div className="paragraphText">
            <Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Paragraph>

            <Space direction="vertical" className="spaceWidth">
              <Row>
                <Col span={9} offset={9}>
                  <Space>
                    <Title level={5}>Comments</Title>
                    <Title level={5}>Attachments</Title>
                  </Space>
                </Col>
                <Col span={4} offset={2}>
                  <Title level={4} type="warning">
                    Add attachment
                  </Title>
                  <Space>
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                  </Space>
                </Col>
              </Row>
              <Row>
                <Col span={16}>
                  <Space>
                    <div className="circle" />
                    <Title level={5}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,set diam nonumy
                    </Title>
                  </Space>
                  <div>
                    <Space>
                      <div className="circle" />
                      <Title level={5}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,set diam nonumy
                      </Title>
                    </Space>
                  </div>
                </Col>
                <Col span={4} offset={4}>
                  <Space>
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                  </Space>
                </Col>
              </Row>
            </Space>
            <div className="commentCenter">
              <Text type="warning" strong>
                Add Comment
              </Text>
            </div>
          </div>
        </div>
        {/* ---------------------------------------second card end---------------------------------*/}
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="Upcoming" key="1">
            <div className="Secondborder">
              <Row>
                <Col span={8}>
                  <Space>
                    <Text strong>Website Quotes </Text>
                    <Text type="warning">owners name</Text>
                  </Space>
                </Col>
                <Col span={6} offset="2">
                  <Text type="warning">Status:Not Started</Text>
                </Col>
                <Col span={4} offset="4">
                  <Text strong>Due:9/10/2020</Text>
                </Col>
              </Row>
              <div className="detailsText">
                <Title level={5}>Details</Title>
              </div>
              <div className="paragraphText">
                <Paragraph>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </Paragraph>
                <div className="commentCenter">
                  <Space>
                    <Title level={5}>Comments</Title>
                    <Title level={5}>Attachments</Title>
                  </Space>
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
        {/* -------------------------third row------------------ */}
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="Thread All" key="1">
            <div className="collapseMargin">
              <Text>
                <h4>All Comments from this project</h4>
              </Text>
            </div>
            <div>
              <Row>
                <Col span={18}>
                  <div className="spaceMargin">
                    <Space>
                      <div className="circle" />
                      <Title level={5}>
                        Please view draft at link.Leave comments via adobe XD link...etc
                      </Title>
                    </Space>
                    <div>
                      <Space>
                        <div className="circle" />
                        <Title level={5}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,set diam nonumy
                        </Title>
                      </Space>
                      <div>
                        <Space>
                          <div className="space" />
                          <div className="rectangle" />
                          <div className="rectangle" />
                          <div className="rectangle" />
                        </Space>
                      </div>
                    </div>
                    <div>
                      <Space>
                        <div className="circle" />
                        <Title level={5}>
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,set diam nonumy
                        </Title>
                      </Space>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <Title level={4} type="warning">
                    Add attachment
                  </Title>
                  <Space>
                    <div className="rectangle" />
                    <div className="rectangle" />
                    <div className="rectangle" />
                  </Space>
                  <div>
                    <Space>
                      <div className="rectangle" />
                      <div className="rectangle" />
                      <div className="rectangle" />
                    </Space>
                  </div>
                  <div>
                    <Space>
                      <div className="rectangle" />
                      <div className="rectangle" />
                      <div className="rectangle" />
                    </Space>
                  </div>
                  <div>
                    <Space>
                      <div className="rectangle" />
                      <div className="rectangle" />
                      <div className="rectangle" />
                    </Space>
                  </div>
                </Col>
              </Row>
            </div>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
}

export default Index;
