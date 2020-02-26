import React from 'react';
import Layout from './components/Layout';
import { Heading, Text } from '@chakra-ui/core';

export default function App() {
  return (
    <Layout>
      <Heading as='h1' textAlign='center' color='teal.900'>
        Home
      </Heading>
      <Text textAlign='center'>Welcome to favbook</Text>
    </Layout>
  );
}
