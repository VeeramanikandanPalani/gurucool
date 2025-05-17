import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme, Typography, Space } from "antd";
const { Header, Sider, Content } = Layout;
import CourseCatelogue from "../Components/CourseCatelogueComponent";
import SideMenu from "../Components/SideMenu";
const { Title } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu collapse={collapsed} />
      <Layout>
        <Header
          style={{ padding: 0, background: colorBgContainer }}
          className="content-box"
        >
          <Space
            direction="horizontal"
            size="middle"
            style={{ display: "flex", alignItems: "baseline" }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ height: 50 }}
            />
            <Title level={4}>Course Catelogue</Title>
          </Space>
        </Header>
        <Content
          className="content-box"
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <CourseCatelogue />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
