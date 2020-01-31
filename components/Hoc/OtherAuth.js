import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER } from "../../graphql/User/query.ts";
import { Redirect } from "react-router-dom";
import Loading from "../Loading/Loading";

const OtherAuth = condition => Component => props => (
  <Query query={GET_ACTIVE_USER}>
    {({ data, loading }) => {
      if (loading) return <Loading />;

      return condition(data) ? <Redirect to="/" /> : <Component {...props} />;
    }}
  </Query>
);

export default OtherAuth;
