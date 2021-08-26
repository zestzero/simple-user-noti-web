import { GetServerSidePropsContext } from "next";

export const getGatewayUrl = (context: GetServerSidePropsContext) => (path: string) => {
    return `http://${context.res.getHeader('gatewayUrl')}/${path}`;
};
