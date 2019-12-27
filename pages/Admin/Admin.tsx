import * as React from "react";
import Auth from "../../components/Hoc/Auth";
import { User } from "../../@types/types/DatabaseTypes";

const Admin: React.FC = () => {
  return <div>admin page</div>;
};

export default Auth((session: any) => {
  let activeUser: User = null;

  if (session && session.activeUser.user !== null) {
    activeUser = session.activeUser.user;
  }

  return activeUser !== null ? activeUser.admin === true : false;
})(Admin);
