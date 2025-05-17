import React from "react";
import { Row, Col, Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Login data:", values);
    navigate("/Dashboard");
  };

  return (
    <div className="form-container">
      <Card title="Login" style={{ width: 400 }}>
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
