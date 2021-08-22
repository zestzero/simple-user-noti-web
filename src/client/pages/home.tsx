import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
// import useSWR from "swr";
import { getGatewayUrl } from "services/gateway.service";
// import fetch from 'unfetch'

interface Props {
  message: string;
}

// const fetcher = (url: string) => fetch(url).then(r => r.json())
const Home: NextPage<Props> = ({ message }) => {
  // const { data } = useSWR<MessageResponse>('http://localhost:3000/api/message', fetcher);
  return message ? (
    <>
      <h1>Loaded from Nextjs</h1>
      <h2>message from gateway: {message}</h2>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = getGatewayUrl(context)('api/message');
  const res = await fetch(url);
  const response = await res.json();

  return {
    props: {
      message: response.message,
    },
  };
}

export default Home;
