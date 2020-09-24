import Wrapper from './Wrapper';
import React from 'react';
import { connect } from 'react-redux';
import { makeSelectTheme } from 'app/containers/StyleProvider/selector';
import { changeTheme } from 'app/containers/StyleProvider/actions';
import makeDropdownMenu from './makeDropdownMenu';

const Component: React.FC<Props> = (props) => {
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
