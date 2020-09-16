import React, { useCallback, useContext, useMemo } from 'react';
import {
  PageHeader,
  Button,
  Form,
  Select,
  Input,
  InputNumber,
  Alert,
} from 'antd';
import { StoreContext } from '../store/store';
import {
  OrderType,
  FieldData,
  OrderKeys,
  Direction,
  Fields,
} from '../store/types';
import { debounce } from 'lodash-es';
import styles from './ticketform.module.scss';

const { Option } = Select;
const { TextArea } = Input;

const TicketForm: React.FC = () => {
  const {
    state: {
      order: { fields, symbols, filteredSymbols, error },
    },
    actions,
  } = useContext(StoreContext);

  const isMarketOrder = OrderType.MKT === fields?.orderType;
  const isDirectionBuy = Direction.BUY === fields?.action;

  const getFieldData = useMemo((): FieldData[] => {
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
  }, [fields]);

  const onChange = useCallback(
    (fields: Fields) => {
      actions.editOrder({ fields });
    },
    [actions]
  );

  const disableSubmit = useMemo((): boolean => {
    return isMarketOrder
      ? !(fields?.symbol && fields?.qty)
      : !(fields?.symbol && fields?.qty && fields?.price && fields?.stopPrice);
  }, [fields]);

  const onFinish = useCallback(
    (fields: Fields) => {
      actions.submitOrder({ fields });
    },
    [actions]
  );

  const onSymbolSearch = useCallback(
    debounce((value: string) => {
      if (value.trim() === '') {
        actions.filteredSymbols({ filteredSymbols: [...symbols] });
      } else {
        const filteredSymbols = symbols?.filter((s) =>
          s.toLowerCase().includes(value.toLowerCase())
        );
        if (filteredSymbols && filteredSymbols.length > 0) {
          actions.filteredSymbols({ filteredSymbols });
        } else {
          actions.filteredSymbols({ filteredSymbols: [] });
        }
      }
    }, 500),
    [actions]
  );

  const onClear = useCallback(() => {
    actions.filteredSymbols({ filteredSymbols: [...symbols] });
  }, [actions]);

  const onErrorClosed = useCallback(() => {
    actions.failedOrder({ error: null });
  }, [actions]);

  return (
    <div className={styles.ticketForm}>
      <PageHeader title="EXD Trader" subTitle="Order Entry" />
      {error ? (
        <Alert
          type="error"
          showIcon={true}
          message={error}
          closeText="Ok"
          onClose={onErrorClosed}
        />
      ) : null}
      <Form
        className={styles.grid}
        fields={getFieldData}
        onFinish={onFinish}
        onValuesChange={(changedValues, values) => {
          onChange(values);
        }}
      >
        <Form.Item label="Action" name="action">
          <Select className={isDirectionBuy ? styles.buy : styles.sell}>
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
            autoClearSearchValue={false}
            onSearch={onSymbolSearch}
            showArrow={false}
            dropdownMatchSelectWidth={true}
            style={{ width: '112px' }}
            allowClear={true}
            onClear={onClear}
          >
            {filteredSymbols?.map((symbol: string) => (
              <Option key={symbol} value={symbol}>
                {symbol}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Qty" name="qty">
          <InputNumber min={0} max={999} type="number" />
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
          <Button type="primary" htmlType="submit" disabled={disableSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketForm;
