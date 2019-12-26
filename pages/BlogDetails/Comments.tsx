import * as React from "react";
import { Comment, Grid, Divider, Icon, Popup } from "semantic-ui-react";
import { useQuery } from "react-apollo";
import Loading from "../../components/Loading/Loading";
import { GET_COMMENTS } from "../../graphql/Comment/query";
import {
  GetCommentsReturnData,
  Props
} from "../../@types/interfaces/PageInterfaces/BlogDetails/allcommentstab.interfaces";
import Moment from "react-moment";
import { ArrowBack, NavigateNext } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const Comments: React.FC<Props> = ({ activeUser }) => {
  const currentBlogId = window.location.pathname.split("/")[3];

  const { data, loading } = useQuery<GetCommentsReturnData>(GET_COMMENTS);

  if (loading) return <Loading size={50} />;

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
    <Grid>
      <Grid.Column>
        <Comment.Group>
          {data.comments.map(comment => (
            <Comment key={comment.id}>
              <Comment.Avatar
                as="a"
                src={getImageUrlByGender(comment.user.gender)}
              />
              <Comment.Content>
                <Comment.Author>
                  {comment.user.name} {comment.user.surname}{" "}
                  {activeUser.id === comment.user.id && "(yorumun)"}
                </Comment.Author>
                <Comment.Metadata>
                  <div>
                    <Moment date={comment.createdAt} fromNow ago /> ago
                  </div>
                  <div>{comment.likes} beğeni</div>
                </Comment.Metadata>
                <Comment.Text>
                  {comment.content.slice(0, 40)}...{" "}
                  {currentBlogId !== comment.blog_id && (
                    <NavLink to={`/blog/details/${comment.blog_id}`}>
                      Blog'a git!
                    </NavLink>
                  )}
                </Comment.Text>
              </Comment.Content>
              <Divider />
            </Comment>
          ))}
        </Comment.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Comments;
