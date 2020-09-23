import { Layout } from 'antd';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
const { Footer } = Layout;

const Component: React.FC = (props) => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <FormattedMessage
        {...messages.licenseMessage}
        values={{ year: new Date().getFullYear() }}
      />
    </Footer>
  );
};

export default Component;
