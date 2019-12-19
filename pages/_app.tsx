import App from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withReactRouter from "../components/Hoc/with-react-router";

const MyApp: React.FC<any> = ({ Component, pageProps, apolloClient }) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default withApollo(withReactRouter(MyApp));
