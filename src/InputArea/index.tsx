import {
  Button, Col, Form, Input, Row, Select,
} from "antd";
import React from "react";
import { runSearch } from "../api/search";
import { useStateContext } from "../Context/ConfigProvider";
import { InputData } from "../types";
import css from "./InputArea.module.css";

function InputArea() {
  const [form] = Form.useForm();
  const {
    models, environments, setResult, setLoading,
  } = useStateContext();

  return (
    <div className={css.container}>
      <Form
        layout="vertical"
        form={form}
        onFinish={async (values: InputData) => {
          setLoading(true);
          await runSearch({ ...values, setResult });
          setLoading(false);
        }}
      >
        <Row gutter={10}>
          <Col span={10}>
            <Form.Item label="Input" name="input">
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
                {environments?.map((env) => <Select.Option key={env} value={env}>{env}</Select.Option>)}
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
                {models?.map((model) => <Select.Option key={model} value={model}>{model}</Select.Option>)}

              </Select>
            </Form.Item>
          </Col>
          <Col span={2} />
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">Search</Button>
        </Form.Item>
      </Form>
    </div>

  );
}
export default InputArea;
