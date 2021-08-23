import { GetServerSidePropsContext } from "next";

export const getGatewayUrl = (context: GetServerSidePropsContext) => {
    return `http://${context.res.getHeader('gatewayUrl')}`;
};
