import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

interface QueryData {
  users: [any];
}

const query = gql`
  query {
    users {
      id
      name
      surname
      username
      email
      createdAt
    }
  }
`;

const Home: React.FC = () => {
  const { data, loading } = useQuery<QueryData>(query);

  if (loading) return <div>loading</div>;

  return (
    <div>
      <h1>home</h1> <p>{data.users.map(user => user.name)}</p>
    </div>
  );
};

export default Home;
