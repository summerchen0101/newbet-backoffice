import Wrapper from './Wrapper';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeSelectTheme } from 'app/store/style/selector';
import { changeTheme } from 'store/style/actions';
import makeDropdownMenu from './makeDropdownMenu';

const Component: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log('[ThemeDropdown] useEffect');
  });
  const menu = makeDropdownMenu(props.changeTheme);
  return <Wrapper title={props.title} menu={menu} />;
};

const makeMapStateToProps = () => {
  const selectTheme = makeSelectTheme();
  return (state) => ({
    title: selectTheme(state),
  });
};
const mapDispatchToProps = (dispatch) => ({
  changeTheme: (theme) => dispatch(changeTheme(theme)),
});

type Props = ReturnType<ReturnType<typeof makeMapStateToProps>> &
  ReturnType<typeof mapDispatchToProps> & {
    title: string;
  };

export default connect(makeMapStateToProps, mapDispatchToProps)(Component);
