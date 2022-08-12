import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Services from '../../components/Services';
import serviceslist from '../../utils/servicesList';

const Dashboard = () => {
  return (
    <>
      {serviceslist.map((list, key) => (
        <Services key={key} {...list} />
      ))}
    </>
  );
};

export default withPageAuthRequired(Dashboard);
