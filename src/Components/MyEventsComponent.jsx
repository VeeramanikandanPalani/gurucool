import React from "react";
import { Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const handleButtonClick = (record) => {
  console.log("Button clicked for:", record);
  // Your custom logic here
};

const columns = [
  {
    title: "Topic",
    dataIndex: "topic",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.topic.length - b.topic.length,
    sortDirections: ["descend"],
  },
  {
    title: "Description",
    dataIndex: "brief",
  },
  {
    title: "Facilitator",
    dataIndex: "facilitator",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.facilitator.length - b.facilitator.length,
  },
  {
    title: "Schedule",
    dataIndex: "schedule",
    sorter: (a, b) => new Date(a.schedule) - new Date(b.schedule),
    sortDirections: ["descend"],
  },

  {
    title: "Start Time",
    dataIndex: "startTime",
    sortDirections: ["descend"],
  },
  {
    title: "End Time",
    dataIndex: "endTime",
    sortDirections: ["descend"],
  },
  {
    title: "Status",
    dataIndex: "status",
    sortDirections: ["descend"],
  },
  {
    title: "Action",
    dataIndex: "acion",
    render: (text, record) => (
      <Button
        type="primary"
        size="small"
        onClick={() => handleButtonClick(record)}
        className="success-button"
      >
        Enroll <PlusOutlined />
      </Button>
    ),
  },
];
const data = [
  {
    key: "1",
    topic: "Communication Skills",
    brief: "Brief knowledge about communication skills",
    facilitator: "Veera",
    schedule: "2025-05-01",
    startTime: "5PM",
    endTime: "6PM",
    status: "Open",
    action: "-",
  },
  {
    key: "2",
    topic: "PHP Skills",
    brief: "Brief knowledge about communication skills",
    facilitator: "Veera",
    schedule: "2025-05-02",
    startTime: "4PM",
    endTime: "6PM",
    status: "Open",
    action: "-",
  },
  {
    key: "3",
    topic: "React Native Course",
    brief: "Brief knowledge about communication skills",
    facilitator: "Veera",
    schedule: "2025-05-03",
    startTime: "5PM",
    endTime: "6PM",
    status: "Open",
    action: "-",
  },
  {
    key: "4",
    topic: "Communication Skills",
    brief: "Brief knowledge about communication skills ",
    facilitator: "Veera",
    schedule: "2025-05-04",
    startTime: "3PM",
    endTime: "4PM",
    status: "Open",
    action: "-",
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const MyEventsComponent = () => (
  <Table
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: "sorter-icon" }}
    size="small"
  />
);
export default MyEventsComponent;
