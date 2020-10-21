import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { CardProps } from 'antd/lib/card';

const NumberCard = styled(Card)<CardProps & { num: number }>`
  height: 180px;
  text-align: center;
  display: flex;
  flex-direction: colume;
  align-items: center;
  justify-content: center;
  p {
    margin: 0;
    &.num {
      font-size: 40px;
      line-height: 50px;
      ${(props) => props.num === 0 && 'color: #ccc'}
    }
    &.title {
      font-size: 18px;
    }
  }
`;

type Props = { num: number; title: string };

const Component: React.FC<Props> = ({ num, title }) => (
  <NumberCard num={num}>
    <p className="num">{num}</p>
    <p className="title">{title}</p>
  </NumberCard>
);

export default Component;
