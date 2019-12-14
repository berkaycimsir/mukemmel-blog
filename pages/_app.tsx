import App from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";

const MyApp: React.FC<any> = ({ Component, pageProps, apolloClient }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(MyApp);
