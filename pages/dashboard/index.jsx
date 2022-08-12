import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Services from '../../components/Services';

const Dashboard = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default withPageAuthRequired(Dashboard);
