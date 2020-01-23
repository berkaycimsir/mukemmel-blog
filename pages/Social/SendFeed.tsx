import * as React from "react";
import {
  Form,
  Dropdown,
  DropdownItemProps,
  Message,
  StrictDropdownProps
} from "semantic-ui-react";
import { useQuery, useMutation } from "react-apollo";
import { GET_BLOGS } from "../../graphql/Blog/query";
import {
  Props,
  GetBlogsReturnData,
  AddFeedReturnData,
  AddFeedVariables
} from "../../@types/interfaces/PageInterfaces/Feed/sendfeed.interfaces";
import { Blog } from "../../@types/types/database/DatabaseTypes";
import { FEEDS } from "../../graphql/Feed/query";
import { ADD_FEED } from "../../graphql/Feed/mutation";
import { NavLink } from "react-router-dom";

const SendFeed: React.FC<Props> = ({ activeUser }) => {
  const [blogId, setBlogId] = React.useState<string>("");
  const [value, setValue] = React.useState<StrictDropdownProps["value"]>("");
  const [content, setContent] = React.useState<string>("");

  const { data, loading } = useQuery<GetBlogsReturnData>(GET_BLOGS);

  const [addFeed, { loading: addFeedLoading }] = useMutation<
    AddFeedReturnData,
    AddFeedVariables
  >(ADD_FEED, {
    refetchQueries: [{ query: FEEDS }]
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFeed({
      variables: {
        blog_id: blogId === "" ? undefined : blogId,
        content,
        user_id: activeUser.id
      }
    }).then(() => {
      setContent("");
      setValue("");
      setBlogId("");
    });
  };

  const options: DropdownItemProps[] = [
    {
      text: "İstemiyorum",
      value: 1,
      onClick: () => {
        setBlogId("");
        setValue("İstemiyorum");
      }
    }
  ];

  if (!loading) {
    data.blogs.forEach((blog: Blog) => {
      options.push({
        text: blog.title,
        value: blog.title,
        onClick: () => {
          setBlogId(blog.id);
          setValue(blog.title);
        }
      });
    });
  }
  console.log(activeUser);

  return (
    <Form reply>
      <Form.TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        disabled={addFeedLoading}
        value={content}
        style={{ minHeight: "200px" }}
        placeholder={
          !activeUser
            ? "Feed göndermek için önce giriş yapmanız gerekir!"
            : "Feed Gönder"
        }
      />
      <Message size="small" color={!activeUser ? "red" : null}>
        <Message.Content>
          {!activeUser ? (
            <NavLink style={{ color: "#db2828" }} to="/login">
              Giriş Yapmak İçin Tıkla
            </NavLink>
          ) : (
            <div>İsterseniz bir bloğu etiketleyerek paylaşabilirsiniz!</div>
          )}
        </Message.Content>
      </Message>
      <Dropdown
        placeholder={!activeUser ? "Önce giriş yapın!" : "Blog Seçiniz..."}
        loading={loading}
        options={options}
        fluid
        selection
        scrolling
        value={value}
        disabled={!activeUser}
      />
      <Form.Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
        loading={addFeedLoading}
        disabled={addFeedLoading || !content || !activeUser}
        style={{ marginTop: "10px" }}
        inverted
        color={!activeUser ? "red" : "green"}
        content={!activeUser ? "Lütfen Giriş Yapınız!" : "Gönder"}
      />
    </Form>
  );
};

export default SendFeed;
