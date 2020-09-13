import React, { useContext } from 'react';
import { PageHeader, Button, Form, Select, Input, InputNumber } from 'antd';
import { StoreContext } from '../store/store';

const styles = require('./ticketform.module.scss');

const { Option } = Select;
const { TextArea } = Input;

function TicketForm() {
  const { state } = useContext(StoreContext);
  const {
    action,
    symbol,
    qty,
    price,
    stopPrice,
    orderType,
    tif,
    comment,
  } = state.order;

  return (
    <div className={styles.ticketForm}>
      <PageHeader title="EXD Trader" subTitle="Order Entry" />

      <Form className={styles.grid} onValuesChange={() => {}}>
        <Form.Item label="Action" name="action" initialValue={action}>
          <Select>
            <Option value="buy">Buy</Option>
            <Option value="sell">Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Symbol" name="symbol" initialValue={symbol}>
          <Input placeholder="<Enter Symbol>" />
        </Form.Item>

        <Form.Item label="Qty" name="qty" initialValue={qty}>
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item label="Price" name="price" initialValue={price}>
          <InputNumber min={0} precision={2} step={0.01} />
        </Form.Item>

        <Form.Item label="Order Type" name="type" initialValue={orderType}>
          <Select>
            <Option value="lmt">Limit</Option>
            <Option value="mkt">Market</Option>
          </Select>
        </Form.Item>

        <Form.Item label="TIF" name="tif" initialValue={tif}>
          <Select style={{ width: '50%' }}>
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
          initialValue={stopPrice}
        >
          <InputNumber min={0} precision={2} step={0.01} />
        </Form.Item>

        <Form.Item
          name="comment"
          style={{ gridColumn: 'span 2' }}
          initialValue={comment}
        >
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
