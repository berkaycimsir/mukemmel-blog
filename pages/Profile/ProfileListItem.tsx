import * as React from "react";
import { List, Image } from "semantic-ui-react";
import {
  EditOutlined,
  DoneOutline,
  CloseOutlined,
  Done
} from "@material-ui/icons";

type Props = {
  color: string;
  header: string;
  description: any;
};

const ProfileListItem: React.FC<Props> = ({ color, header, description }) => {
  const [update, setUpdate] = React.useState<{
    updating?: boolean;
    field?: string;
    text?: string;
  }>({ updating: false, text: "" });

  const { updating, field, text } = update;

  return (
    <List.Item style={{ marginTop: "5px" }} as="a">
      <List.Content>
        <List.Header style={{ color }} content={header} />
        <List.Description>
          {description}

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
