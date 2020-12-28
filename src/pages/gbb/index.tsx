import React, { memo, useState, useEffect } from 'react';
import { Card, Typography, Row, Col, Space, Calendar, message, Progress } from 'antd';
import { formatMessage } from 'umi';
import { StarFilled, CheckOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { queryGbb } from './service';

import './style.less';

const { Title, Text } = Typography;
const Index = memo(() => {
  const [data, setData]: any = useState([]);
  const [loadMore, setLoadMore] = useState(false);

  const showMore = () => {
    setLoadMore(!loadMore);
  };
  const refresh = async () => {
    try {
      await queryGbb().then((result: any) => {
        setData(result);
        return true;
      });
    } catch (error) {
      message.error(formatMessage({ id: 'validate.error' }));
      return false;
    }
    return true;
  };
  useEffect(() => {
    // get data from server
    refresh();
  }, []);

  const progressBar = [
    <Progress percent={90} size="small" strokeColor="#63f614" />,
    <Progress percent={50} size="small" strokeColor="#fb2bcc" />,
    <Progress percent={70} size="small" strokeColor="#fac561" />,
    <Progress percent={60} size="small" strokeColor="#63f614" />,
  ];
  const progressCount = loadMore ? progressBar.length : 3;

  return (
    <div>
      <Card>
        <Row>
          <Col span={5}>
            <div className="task">
              <Text>
                Task: <br />
                by date
              </Text>
            </div>
            <div className="invoiceText">
              <Text>
                Invoices: <br />
                Check QuickBooks for example
              </Text>
            </div>
          </Col>
          <Col span={5}>
            <Title level={5}>My Tasks</Title>
            <div style={{ width: 170 }}>
              {progressBar.slice(0, progressCount).map((progress) => (
                <li>{progress}</li>
              ))}
            </div>
            <div className="progressBarMore" onClick={showMore}>
              more+
            </div>
            <div className="invoices">
              <Title level={5}>
                Invoices
                <br />
                Due
              </Title>
            </div>
            <div className="invoices">
              <Title level={5}>Total Spent</Title>
            </div>
          </Col>
          <Col span={5}>
            <Space>
              <Title level={5}>My Projects</Title>
              <Title level={5}>
                Rating:5 <StarFilled />
              </Title>
            </Space>
            <div>
              <Text>{data ? data.activeProject : null}</Text>
            </div>
            <div>
              <Space>
                <div className="rectange1">
                  <div className="head">{data ? data.gbb : null}</div>
                  <div className="content">
                    <div>Status:</div>
                    <div>Ontime</div>
                    <div>DFM</div>
                  </div>
                </div>
                <div className="rectange2">
                  <div className="head">{data ? data.wc : null}</div>
                  <div className="content">
                    <div>Status:</div>
                    <div>Delayed</div>
                    <div>DIY</div>
                  </div>
                </div>
                <div className="rectange3">
                  <div className="head">{data ? data.stalzRe : null}</div>
                  <div className="content">
                    <div>Status:</div>
                    <div>Ontime</div>
                    <div>DIY</div>
                  </div>
                </div>
              </Space>
            </div>
            <div className="rectangeMargin">
              <Text>{data ? data.bitProject : null}</Text>
              <div className="rectange4" />
            </div>
            <div className="rectangeMargin">
              <Text>{data ? data.draftProject : null}</Text>
              <div className="rectange5" />
            </div>
            <div className="rectangeMargin">
              <Text>{data ? data.completeProject : null}</Text>
              <Space>
                <div className="rectange6">
                  <CheckOutlined className="checkoutline" />
                </div>
                <div className="rectange6">
                  <CheckOutlined className="checkoutline" />
                </div>
                <div className="rectange6">
                  <CheckOutlined className="checkoutline" />
                </div>
                <ArrowRightOutlined className="arrowRight" />
              </Space>
            </div>
          </Col>
          <Col span={9}>
            <Title level={5} className="milestones">
              Milestones
            </Title>
            <div className="site-calendar-card">
              <Calendar fullscreen={false} />
            </div>
            ,
            <div className="calenderRectangle">
              <Space>
                <div className="rectange7" />
                <div className="rectange8" />
                <div className="rectange9" />
              </Space>
            </div>
            <div>
              <Space>
                <div className="rectange7" />
                <Text>Wireframe my task</Text>
              </Space>
            </div>
            <div>
              <Space>
                <div className="rectange8" />
                <Text>Photos Gathered Owners name</Text>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
});
export default Index;
