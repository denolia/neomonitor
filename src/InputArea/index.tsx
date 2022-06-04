import {
  Button, Form, Input, Select,
} from "antd";
import React from "react";
import css from "./InputArea.module.css";

function InputArea() {
  const [form] = Form.useForm();

  return (
    <div className={css.container}>

      <Form
        layout="vertical"
        form={form}
      >

        <Form.Item label="Input">
          <Input placeholder="input" />
        </Form.Item>
        <Form.Item
          name="environment"
          label="Environment"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Select.Option value="prod">prod</Select.Option>
            <Select.Option value="staging">staging</Select.Option>
            <Select.Option value="development">development</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Search</Button>
        </Form.Item>
      </Form>
    </div>

  );
}
export default InputArea;
