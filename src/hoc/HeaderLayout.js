import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../containers/Layout/Layout';

const HeaderLayout = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    <>
      <Layout />
      <Component {...props} />
    </>
  )} />
)

export default HeaderLayout;
