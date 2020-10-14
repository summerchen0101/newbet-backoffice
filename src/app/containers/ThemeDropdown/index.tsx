import Wrapper from './Wrapper';
import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { makeSelectTheme } from 'app/store/style/selector';
import makeDropdownMenu from './makeDropdownMenu';


const Component: React.FC = (props) => {
  const selectTheme = makeSelectTheme();
  const title = useSelector(selectTheme);
  const menu = makeDropdownMenu();
  return <Wrapper title={title} menu={menu} />;
};

export default Component;
