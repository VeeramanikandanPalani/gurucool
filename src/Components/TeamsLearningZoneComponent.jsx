import React, { useState } from "react";
import { Divider, Radio, Table, Button } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";

const handleButtonClick = (record) => {
  console.log("Button clicked for:", record);
  // Your custom logic here
};

const columns = [
  {
    title: "Topic",
    dataIndex: "topic",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Brief",
    dataIndex: "brief",
  },
  {
    title: "Facilitator",
    dataIndex: "facilitator",
  },
  {
    title: "Schedule",
    dataIndex: "schedule",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: (text, record) => (
      <Button
        type="primary"
        size="small"
        onClick={() => handleButtonClick(record)}
        className="success-button"
      >
        Download <DownloadOutlined />
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
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};
const TeamsLearningZoneComponent = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div>
      <Table
        rowSelection={Object.assign({ type: selectionType }, rowSelection)}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default TeamsLearningZoneComponent;
