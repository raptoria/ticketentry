import React, { useContext } from 'react';
import { PageHeader, Button, Form, Select, Input, InputNumber } from 'antd';
import { StoreContext } from '../store/store';
import { OrderType, Order, FieldData, OrderKeys } from '../store/types';
const styles = require('./ticketform.module.scss');

const { Option } = Select;
const { TextArea } = Input;

const getFieldData = (order: Order): FieldData[] => {
  const fields: FieldData[] = [];
  for (const [key, value] of Object.entries(order)) {
    fields.push({
      name: [key],
      value,
      touched: false,
      validating: false,
      errors: order.errors[key as OrderKeys] || [],
    });
  }
  return fields;
};

const TicketForm: React.FC = () => {
  const {
    state: { order },
    actions,
  } = useContext(StoreContext);

  const isMarketOrder = OrderType.MKT === order.orderType;

  const onChange = (allValues: any) => {
    console.log('Received values from form: ', allValues);
    actions.editOrder(allValues);
  };
  /* 
  const validateNum = (rule: Rule, value: any) => {
    debugger;
    if (orderType === OrderType.MKT || value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject('Should be > 0');
  };
 */
  return (
    <div className={styles.ticketForm}>
      <PageHeader title="EXD Trader" subTitle="Order Entry" />

      <Form
        className={styles.grid}
        fields={getFieldData(order)}
        onValuesChange={(changedValues, allValues) => {
          onChange(allValues);
        }}
      >
        <Form.Item label="Action" name="action">
          <Select>
            <Option value="buy">Buy</Option>
            <Option value="sell">Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Symbol" name="symbol">
          <Input placeholder="<Enter Symbol>" />
        </Form.Item>

        <Form.Item label="Qty" name="qty">
          <InputNumber min={0} type="number" />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber
            min={0}
            precision={2}
            step={0.01}
            disabled={isMarketOrder}
            type="number"
          />
        </Form.Item>

        <Form.Item label="Order Type" name="orderType">
          <Select>
            <Option value="lmt">Limit</Option>
            <Option value="mkt">Market</Option>
          </Select>
        </Form.Item>

        <Form.Item label="TIF" name="tif">
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
        >
          <InputNumber
            min={0}
            precision={2}
            step={0.01}
            type="number"
            disabled={isMarketOrder}
          />
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketForm;
