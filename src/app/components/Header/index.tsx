import React from 'react';
import Wrapper from './Wrapper';

const Component: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Component;
