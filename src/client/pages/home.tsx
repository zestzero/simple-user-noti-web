import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';
import fetch from 'unfetch'

interface MessageResponse {
  message: string;
}

const fetcher = (url: string) => fetch(url).then(r => r.json())
const Home: NextPage = () => {
  const { data } = useSWR<MessageResponse>('http://localhost:3000/api/message', fetcher);
  return data ? (
    <>
      <h1>Loaded from Nextjs</h1>
      <h2>message from gateway: {data.message}</h2>
    </>
  ) : <h1>Loading</h1>;
};

export default Home;
