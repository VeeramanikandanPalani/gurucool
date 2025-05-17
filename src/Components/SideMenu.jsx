import React from "react";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

const SideMenu = (props) => {
  const navigate = useNavigate();

  const { collapse } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            key: "/Dashboard",
            icon: <UserOutlined />,
            label: "Course Catelogue",
          },
          {
            key: "/MyEvents",
            icon: <VideoCameraOutlined />,
            label: "My Events",
          },
          {
            key: "/TeamZone",
            icon: <UploadOutlined />,
            label: "Teams Learning Zone",
          },
          {
            key: "/TrainerZone",
            icon: <UploadOutlined />,
            label: "Trainer Zone",
          },
        ]}
        style={{
          marginTop: "30px",
        }}
      />
    </Sider>
  );
};

export default SideMenu;
