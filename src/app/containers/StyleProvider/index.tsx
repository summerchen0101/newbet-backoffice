import { ThemeProvider } from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { makeSelectTheme } from 'app/store/style/selector';
const themes = {
  summer: { mainColor: 'purple' },
  sweet: { mainColor: 'pink' },
};

const Component: React.FC<IProps> = (props) => (
  <ThemeProvider theme={themes[props.theme]}>
    {React.Children.only(props.children)}
  </ThemeProvider>
);

const makeMapStateToProps = () => {
  const selectTheme = makeSelectTheme();
  return (state: RootState) => ({
    theme: selectTheme(state),
  });
};

type IProps = ReturnType<ReturnType<typeof makeMapStateToProps>>;

export default connect(makeMapStateToProps)(Component);
