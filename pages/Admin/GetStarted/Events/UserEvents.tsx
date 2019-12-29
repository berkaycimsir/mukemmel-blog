import * as React from "react";
import { useQuery } from "react-apollo";
import { User } from "../../../../@types/types/DatabaseTypes";
import Loading from "../../../../components/Loading/Loading";
import { Card, Feed, Header, Image } from "semantic-ui-react";
import Moment from "react-moment";
import Pagination from "../../../../components/Pagination/Pagination";
import { GetUsersReturnData } from "../../../../@types/interfaces/PageInterfaces/Admin/GetStarted/events.interfaces";
import { GET_LAST_USERS } from "../../../../graphql/User/query";

const UserEvents: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const { data: getUsersData, loading: getUsersLoading } = useQuery<
    GetUsersReturnData
  >(GET_LAST_USERS);

  let totalUsers: Array<User>;

  let indexOfLastUser: number;
  let indexOfFirstUser: number;
  let currentUsers: Array<User>;

  if (!getUsersLoading) {
    totalUsers = getUsersData.users;
    indexOfLastUser = currentPage * 3;
    indexOfFirstUser = indexOfLastUser - 3;
    currentUsers = totalUsers.slice(indexOfFirstUser, indexOfLastUser);
  }

  const menGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
  ];

  const womenGenderImageUrl: Array<string> = [
    "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
  ];

  const getImageUrlByGender: Function = (gender: string): string => {
    return gender === "men" ? menGenderImageUrl[0] : womenGenderImageUrl[0];
  };

  return (
    <div style={{ marginTop: "15px" }}>
      {getUsersLoading ? (
        <Loading size={30} />
      ) : (
        <Card.Content>
          <Feed>
            <Header as="h4" content="Son kayıtlar:" />
            {currentUsers.map((user: User) => (
              <Feed.Event key={user.id}>
                <Feed.Label>
                  <Image size="mini" src={getImageUrlByGender(user.gender)} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>
                    @{user.username} &nbsp;
                    <Moment date={user.createdAt} fromNow ago /> ago
                  </Feed.Date>
                  <Feed.Summary>
                    {user.name} {user.surname}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
            <Pagination
              itemsPerPage={3}
              totalItems={totalUsers}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollTo={false}
            />
          </Feed>
        </Card.Content>
      )}
    </div>
  );
};

export default UserEvents;
