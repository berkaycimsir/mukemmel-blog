import * as React from "react";
import { List, Image } from "semantic-ui-react";
import {
  EditOutlined,
  DoneOutline,
  CloseOutlined,
  Done
} from "@material-ui/icons";
import UpdateUser from "./UpdateUser";

type Props = {
  color: string;
  header: string;
  description: any;
};

const ProfileListItem: React.FC<Props> = ({ color, header, description }) => {
  const [update, setUpdate] = React.useState<{
    updating?: boolean;
    text?: string;
  }>({ updating: false, text: "" });

  const getFieldName = (): string => {
    switch (header) {
      case "İsim":
        return "name";
      case "Soyisim":
        return "surname";
      case "Kullanıcı Adı":
        return "username";
      case "Email":
        return "email";
      case "Cinsiyet":
        return "gender";
      default:
        break;
    }
  };

  const { updating, text } = update;

  return (
    <List.Item style={{ marginTop: "5px" }} as="a">
      <List.Content>
        <List.Header style={{ color }} content={header} />
        <List.Description>
          {updating === true ? (
            <UpdateUser
              field={getFieldName()}
              text={text}
              setUpdate={setUpdate}
            />
          ) : (
            description
          )}

          {!updating && (
            <Image
              onClick={() => {
                setUpdate({ updating: !updating });
              }}
              disabled={updating && !text}
              style={{ float: "right" }}
              children={<EditOutlined />}
            />
          )}
          {updating && (
            <Image
              onClick={() => {
                text && setUpdate({ updating: false });
              }}
              disabled={!text}
              style={{ float: "right" }}
              children={<Done htmlColor="green" />}
            />
          )}
          {updating && (
            <Image
              onClick={() => {
                setUpdate({ updating: false });
              }}
              style={{ float: "right" }}
              children={<CloseOutlined htmlColor="red" />}
            />
          )}
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ProfileListItem;
