import Wrapper from './Wrapper';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeSelectLocale } from 'app/store/language/selector';
import { changeLanguage } from 'store/language/actions';
import makeDropdownMenu from 'app/containers/LanguageDropdown/makeDropdownMenu';
import { langCodeMapper } from 'app/utils/i18n';

const Component: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log('[LanguageDropdown] useEffect');
  });
  const menu = makeDropdownMenu(props.changeLang);
  return <Wrapper title={props.title} menu={menu} />;
};

const makeMapStateToProps = () => {
  const selectLocale = makeSelectLocale();
  return (state) => ({
    title: langCodeMapper[selectLocale(state)],
  });
};
const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => dispatch(changeLanguage(lang)),
});

type Props = ReturnType<ReturnType<typeof makeMapStateToProps>> &
  ReturnType<typeof mapDispatchToProps> & {
    title: string;
  };

export default connect(makeMapStateToProps, mapDispatchToProps)(Component);
