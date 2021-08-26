import React from "react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getGatewayUrl } from "services/gateway.service";
import NavbarComponent from "components/Navbar/Navbar";
import Toasts from "components/Toasts/Toasts";
import ToastsArea from "components/Toasts/ToastsArea";
import { useEffect } from "react";
import { useAppDispatch } from 'app/hook';
import { setup } from 'app/reducer';
import TaskList from "components/Tasks/TaskList";

interface Props {
  message: string;
  gatewayUrl: string;
}

const Home: NextPage<Props> = ({ message, gatewayUrl }) => {
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setup({ gatewayUrl }));
  }, []);

  return (
    <>
      <NavbarComponent />
      <TaskList />
      <ToastsArea>
        {message && <Toasts title="Message from Gateway" content={message} />}
      </ToastsArea>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const url = getGatewayUrl(context)('api/message');
  const res = await fetch(url);
  const response = await res.json();

  return {
    props: {
      message: response.message,
      gatewayUrl: getGatewayUrl(context)(''),
    },
  };
}

export default Home;
