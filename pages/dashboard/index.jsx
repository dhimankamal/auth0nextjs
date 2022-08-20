import React, { useState, useEffect } from 'react';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import Services from '../../components/Services';
import serviceslist from '../../utils/servicesList';



const Dashboard = () => {
  const { user } = useUser();

  useEffect(async () => {
    const getData = await fetch('./api/prisma', {
      method: 'POST',
      body: JSON.stringify({
        user
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await getData.json();

    console.log("data response" , data)
  }, []);

  //console.log('client', posts);
  return (
    <>
      {serviceslist.map((list, key) => (
        <Services key={key} {...list} />
      ))}
    </>
  );
};

// export async function getStaticProps() {
//   const prisma = new PrismaClient()
//   const posts = await prisma.user.findMany()

//   return {
//     props : { posts }
//   }
// }

// export const getServerSideProps = async () => {

//   const posts = await prisma.user.findMany();
//   return { props: { posts } };
// };

export default withPageAuthRequired(Dashboard);
