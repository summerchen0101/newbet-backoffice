import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import { ColProps } from 'antd/lib/col';
import { toCurrency } from '@/utils/transfer';

const Grid = styled(Col)<{ rate: number }>`
  p {
    margin: 0;
    &.title {
      font-size: 17px;
    }
    &.num {
      font-size: 30px;
      line-height: 38px;
    }
    &.rate {
      color: ${(props) => {
        if (props.rate > 0) return 'green';
        else if (props.rate < 0) return 'red';
        else return false;
      }};
    }
  }
`;

type Props = {
  title: string;
  num: number;
  rate?: number;
};

const Component: React.FC<Props & ColProps> = ({
  title,
  num,
  rate,
  ...props
}) => (
  <Grid rate={rate} {...props}>
    <p className="title">{title}</p>
    <p className="num">{toCurrency(num)}</p>
    {rate && (
      <p className="rate">
        {rate > 0 && '+'}
        {rate}%
      </p>
    )}
  </Grid>
);

export default Component;
