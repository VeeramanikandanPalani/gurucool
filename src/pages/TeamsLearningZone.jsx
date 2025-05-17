import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleFilled,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Flex, Layout, Menu, theme, Typography, Space } from "antd";
const { Header, Sider, Content } = Layout;
import TeamsLearningZoneComponent from "../Components/TeamsLearningZoneComponent";
import SideMenu from "../Components/SideMenu";
const { Title } = Typography;

const TeamsLearningZone = () => {
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
            <Title level={4}>Team's Learning Zone</Title>
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
          <TeamsLearningZoneComponent />
          <Button type="primary" size="small">
            Nominate Users <PlusCircleFilled />
          </Button>
        </Content>
      </Layout>
    </Layout>
  );
};
export default TeamsLearningZone;
