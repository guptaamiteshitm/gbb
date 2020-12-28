import React from 'react';
import { Row, Col, Typography, Calendar } from 'antd';
import moment from 'moment';
import ListView from './listView';

import './style.less';

const { Text } = Typography;

function CalenderView() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <div className="calText">
            <Text type="warning">August</Text>
          </div>
          <div className="rectangle">
            <Calendar
              fullscreen={false}
              disabledDate={(current) => {
                return current && current < moment().startOf('day');
              }}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="calText">
            <Text type="warning">September</Text>
          </div>
          <div className="rectangle">
            <Calendar
              fullscreen={false}
              disabledDate={(current) => {
                return current && current < moment().startOf('day');
              }}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="calText">
            <Text type="warning">October</Text>
          </div>
          <div className="rectangle">
            <Calendar
              fullscreen={false}
              disabledDate={(current) => {
                return current && current < moment().startOf('day');
              }}
            />
          </div>
        </Col>
      </Row>
      <ListView />
    </div>
  );
}

export default CalenderView;
