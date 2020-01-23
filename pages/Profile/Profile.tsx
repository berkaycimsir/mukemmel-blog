import * as React from "react";
import { useQuery } from "react-apollo";
import {
  GetUserByIdReturnData,
  GetUserByIdVariables
} from "../../@types/interfaces/PageInterfaces/Profile/profile.interfaces";
import { USER } from "../../graphql/User/query";
import Loading from "../../components/Loading/Loading";

const Profile: React.FC = () => {
  const { data, loading } = useQuery<
    GetUserByIdReturnData,
    GetUserByIdVariables
  >(USER, {
    variables: { id: window.location.pathname.split("/")[2] }
  });

  if (loading) return <Loading size={50} />;

  console.log(data);

  return <div>profile page</div>;
};

export default Profile;
