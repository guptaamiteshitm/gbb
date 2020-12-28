import React from 'react'
import { Card, Typography, Row, Col, Collapse } from 'antd';
import './style.less';

const { Text, Title } = Typography
const { Panel } = Collapse;

function index() {
    return (<div>
        <Card>
            <div className='textCenter'><Text strong> Project XYZ</Text></div>
            <div className='border'>
                <Row>
                    <Col span={8}>
                        <Title level={3}>Invoice 101</Title>
                        <div><Text strong>$ 1,000</Text></div>
                        <div><Text strong>First half of development.</Text></div>
                    </Col>
                    <Col span={6} offset={2}><Text strong>Unpaid:Due today</Text></Col>
                    <Col span={4} offset={4}>
                        <Text strong>Vender</Text>
                        <div><Text strong>Link to pay</Text></div>
                    </Col>
                </Row>
            </div>
            <div className='textCenterProject'><Text strong> Project ABC</Text></div>
            <div>
                <Collapse bordered={true} expandIconPosition='right' >
                    <Panel header="All Paid" key="1" style={{ textAlign: 'center' }}>
                        Congrets! All your hard work has paid off well now,don't you look back and dwell you are graduate now and with good grades look ahead as a new life is waiting for you congrates on getting good grades wish you a worderful journey ahead!
                    </Panel>
                </Collapse>
            </div>
            <div className='textCenterProject'><Text strong> Project DEF</Text></div>
            <div>
                <Collapse bordered={false} expandIconPosition='right'>
                    <Panel header="All Paid" key="1" style={{ textAlign: 'center' }}>
                        Congrets! All your hard work has paid off well now,don't you look back and dwell you are graduate now and with good grades look ahead as a new life is waiting for you congrates on getting good grades wish you a worderful journey ahead!
                    </Panel>
                </Collapse>
            </div>
        </Card>
    </div>)
}

export default index