import {
  Button, Col, Form, Input, Row, Select,
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
        <Row gutter={10}>
          <Col span={10}>
            <Form.Item label="Input">
              <Input placeholder="input" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="environment"
              label="Environment"
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
          </Col>
          <Col span={6}>
            <Form.Item
              name="model"
              label="Model"
            >
              <Select
                placeholder="Select a model"
                allowClear
              >
                <Select.Option value="prod">prod</Select.Option>
                <Select.Option value="staging">staging</Select.Option>
                <Select.Option value="development">development</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary">Search</Button>
            </Form.Item>
          </Col>

        </Row>
      </Form>
    </div>

  );
}
export default InputArea;
