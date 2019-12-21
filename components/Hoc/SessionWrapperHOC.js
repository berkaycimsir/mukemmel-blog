import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER } from "../../graphql/User/query";
import Loading from "../Loading/Loading";

const SessionWrapperHOC = Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {({ data, loading }) => {
      if (loading) return <Loading size={100} />;

      return <Component session={data} {...props} />;
    }}
  </Query>
);

export default SessionWrapperHOC;
