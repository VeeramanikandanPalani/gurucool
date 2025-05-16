import React from "react";
import { Row, Col, Form, Input, Button, Card } from "antd";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Login data:", values);
  };

  return (
    <div className="form-container">
      <Card title="Login" style={{ width: 300 }}>
        <Form name="login" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
