import React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import {
  makeSelectLocale,
  makeSelectMessages,
} from 'app/store/language/selector';

const LanguageProvider: React.FC<IProps> = (props) => {
  return (
    <IntlProvider
      locale={props.locale}
      key={props.locale}
      messages={props.message}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
};

const makeMapStateToProps = () => {
  const selectLocale = makeSelectLocale();
  const selectMessages = makeSelectMessages();
  return (state: RootState, props) => {
    return {
      locale: selectLocale(state),
      message: selectMessages(state),
    };
  };
};

type IProps = ReturnType<ReturnType<typeof makeMapStateToProps>> & {
  version?: string;
};

export default connect(makeMapStateToProps)(LanguageProvider);
