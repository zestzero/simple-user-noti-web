import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
// import useSWR from "swr";
import { getGatewayUrl } from "services/gateway.service";
import NavbarComponent from "components/Navbar/Navbar";
import Toasts from "components/Toasts/Toasts";
import ToastsArea from "components/Toasts/ToastsArea";
// import fetch from 'unfetch'

interface Props {
  message: string;
}

// const fetcher = (url: string) => fetch(url).then(r => r.json())
const Home: NextPage<Props> = ({ message }) => {
  // const { data } = useSWR<MessageResponse>('http://localhost:3000/api/message', fetcher);
  return (
    <>
      <NavbarComponent />
      <ToastsArea>
      {message && <Toasts title="Message from Gateway" content={message} />}
      </ToastsArea>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = getGatewayUrl(context);
  const res = await fetch(url);
  const response = await res.json();

  return {
    props: {
      message: response.message,
    },
  };
}

export default Home;
