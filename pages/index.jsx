import React from 'react';
import { PrismaClient } from '@prisma/client'
import Hero from '../components/Hero';
// import Content from '../components/Content';

export default function Index({posts}) {

  console.log("test" , posts)
  return (
    <>
      <Hero />
   
      {/* <Content /> */}
    </>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const posts = await prisma.user.findMany()

  return {
    props : { posts }
  }
}