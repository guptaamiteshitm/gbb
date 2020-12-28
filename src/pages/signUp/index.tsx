import React from 'react';
import { Form, Input, Button, Row, Col, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.less'


const { Title } = Typography
const Signup = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Card>
            <Title level={4} style={{ textAlign: 'center', marginBottom: 20 }}> Company Registration Form</Title>
            <Row justify="center" >
                <Col span={8} >
                    <Form
                        // {...formItemLayout}
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            name="company"
                            label='Company'
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label='Address'
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Register Company
                                </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row >
        </Card>
    );
};

export default Signup