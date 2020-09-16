import React, { useContext } from 'react';
import { PageHeader, Button, Form, Select, Input, InputNumber } from 'antd';
import { StoreContext } from '../store/store';
import {
  OrderType,
  FieldData,
  OrderKeys,
  Direction,
  Fields,
} from '../store/types';
const styles = require('./ticketform.module.scss');

const { Option } = Select;
const { TextArea } = Input;

const getFieldData = (fields: Fields | undefined): FieldData[] => {
  const fieldsData: FieldData[] = [];
  if (!fields) {
    return fieldsData;
  }

  for (const [key, value] of Object.entries(fields)) {
    fieldsData.push({
      name: [key],
      value,
      touched: false,
      validating: false,
      errors: fields.errors[key as OrderKeys] || [],
    });
  }
  return fieldsData;
};

const TicketForm: React.FC = () => {
  const {
    state: {
      order: { fields, symbols },
    },
    actions,
  } = useContext(StoreContext);

  const isMarketOrder = OrderType.MKT === fields?.orderType;

  const onChange = (fields: Fields) => {
    console.log('Received values from form: ', fields);
    actions.editOrder({ fields });
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

  const onFinish = (fields: Fields) => {
    actions.submitOrder({ fields });
  };

  const onSymbolSearch = (value: string) => {
    const filteredSymbols = symbols?.filter((s) => s.startsWith(value));
    actions.filteredSymbols({ filteredSymbols });
  };

  return (
    <div className={styles.ticketForm}>
      <PageHeader title="EXD Trader" subTitle="Order Entry" />

      <Form
        className={styles.grid}
        fields={getFieldData(fields)}
        onFinish={onFinish}
        onValuesChange={(changedValues, values) => {
          onChange(values);
        }}
      >
        <Form.Item label="Action" name="action">
          <Select>
            <Option value={Direction.BUY}>Buy</Option>
            <Option value={Direction.SELL}>Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Symbol" name="symbol">
          <Select
            showSearch={true}
            placeholder="Enter Symbol"
            notFoundContent="Not found"
            filterOption={false}
            onSearch={onSymbolSearch}
            showArrow={false}
            dropdownMatchSelectWidth={true}
            style={{ width: '112px' }}
          >
            {symbols?.map((symbol: string) => (
              <Option key={symbol} value={symbol}>
                {symbol}
              </Option>
            ))}
          </Select>
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
            <Option value={OrderType.LMT}>Limit</Option>
            <Option value={OrderType.MKT}>Market</Option>
          </Select>
        </Form.Item>

        <Form.Item label="TIF" name="tif">
          <Select>
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
