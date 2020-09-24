import { ThemeProvider } from 'styled-components';
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
const themes = {
  summer: { mainColor: 'orange' },
  sweet: { mainColor: 'pink' },
};

const Component: React.FC<IProps> = (props) => (
  <ThemeProvider theme={themes[props.theme]}>
    {React.Children.only(props.children)}
  </ThemeProvider>
);

const mapStateToProps = (state: RootState) => ({
  theme: 'summer',
});

type IProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Component);
