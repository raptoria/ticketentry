import React from 'react';
import { PageHeader, Button, Form, Select, Input, InputNumber } from 'antd';

const styles = require('./ticketform.module.scss');

const { Option } = Select;
const { TextArea } = Input;

function TicketForm() {
  return (
    <div className={styles.ticketForm}>
      <PageHeader title="EXD Trader" subTitle="Order Entry" />

      <Form className={styles.grid} onValuesChange={() => {}}>
        <Form.Item label="Action" name="action">
          <Select defaultValue="buy">
            <Option value="buy">Buy</Option>
            <Option value="sell">Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Symbol" name="symbol">
          <Input placeholder="<Enter Symbol>" />
        </Form.Item>

        <Form.Item label="Qty" name="qty">
          <InputNumber defaultValue={0} min={0} />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber defaultValue={0} min={0} precision={2} step={0.01} />
        </Form.Item>

        <Form.Item label="Order Type" name="type">
          <Select defaultValue="lmt">
            <Option value="lmt">Limit</Option>
            <Option value="mkt">Market</Option>
          </Select>
        </Form.Item>

        <Form.Item label="TIF" name="tif">
          <Select defaultValue="gtc" style={{ width: '50%' }}>
            <Option value="gtc">GTC</Option>
            <Option value="day">DAY</Option>
            <Option value="fok">FOK</Option>
            <Option value="ioc">IOC</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Stop Price"
          name="stopPrice"
          style={{
            display: 'inline-block',
            gridColumn: 'span 2',
            justifySelf: 'end',
          }}
        >
          <InputNumber defaultValue={0} min={0} precision={2} step={0.01} />
        </Form.Item>

        <Form.Item name="comment" style={{ gridColumn: 'span 2' }}>
          <TextArea placeholder="<COMMENT>" rows={4} />
        </Form.Item>

        <Form.Item
          style={{
            display: 'inline-block',
            gridColumn: 'span 2',
            justifySelf: 'end',
          }}
        >
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default TicketForm;
