import React from 'react';

import { PageHeader } from 'antd';
import { useHistory, Link } from 'react-router-dom';
import { BreadcrumbProps } from 'antd/lib/breadcrumb';
import { Route } from 'antd/lib/breadcrumb/Breadcrumb';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

const Component: React.FC<{ title: string; breadcrumb: BreadcrumbProps }> = ({
  title,
  breadcrumb,
}) => {
  const history = useHistory();
  return (
    <PageHeader
      style={{ padding: 0, paddingBottom: 20 }}
      onBack={() => history.goBack()}
      title={title}
      breadcrumb={{ itemRender, ...breadcrumb }}
    />
  );
};

export default Component;
