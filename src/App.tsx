import { Table } from "antd";
import React from "react";
import InputArea from "./InputArea";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
function App() {
  return (
    <div className="App">
      <InputArea />
      <Table dataSource={dataSource} columns={columns} />
      <Table dataSource={dataSource} columns={columns} />
      <Table dataSource={dataSource} columns={columns} />

    </div>
  );
}

export default App;
