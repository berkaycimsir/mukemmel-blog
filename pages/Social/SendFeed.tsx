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

  return (
    <Form reply>
      <Form.TextArea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(e.target.value)
        }
        disabled={addFeedLoading}
        value={content}
        style={{ minHeight: "200px" }}
        placeholder="Feed Gönder"
      />
      <Message
        content="İsterseniz bir bloğu etiketleyerek feed'inizi paylaşabilirsiniz!"
        size="small"
      />
      <Dropdown
        placeholder="Blog Seçiniz..."
        loading={loading}
        options={options}
        fluid
        selection
        scrolling
        value={value}
      />
      <Form.Button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onClick(e)}
        loading={addFeedLoading}
        disabled={addFeedLoading || !content}
        style={{ marginTop: "10px" }}
        inverted
        color="green"
        content="Gönder"
      />
    </Form>
  );
};

export default SendFeed;
