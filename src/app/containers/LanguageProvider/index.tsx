import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { makeSelectLocale } from 'app/store/language/selector';
import { localesMessages } from 'app/store/language/reducer';

const LanguageProvider: React.FC<IProps> = (props) => {
  return (
    <IntlProvider
      locale={props.locale}
      messages={localesMessages[props.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
};

const makeMapStateToProps = () => {
  const selectLocale = makeSelectLocale();
  return (state: RootState, props) => {
    return {
      locale: selectLocale(state),
    };
  };
};

type IProps = ReturnType<ReturnType<typeof makeMapStateToProps>> & {
  version?: string;
};

export default connect(makeMapStateToProps)(LanguageProvider);
