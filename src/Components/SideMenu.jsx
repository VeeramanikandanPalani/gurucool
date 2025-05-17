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

const SideMenu = (props) => {
  const { collapse } = props;
  return (
    <Sider trigger={null} collapsible collapsed={collapse}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Course Catelogue",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "My Events",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Teams Learning Zone",
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Trainer Zone",
          },
        ]}
      />
    </Sider>
  );
};

export default SideMenu;
