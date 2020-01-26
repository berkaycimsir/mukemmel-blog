import * as React from "react";
import { List, Image } from "semantic-ui-react";

type Props = {
  color: string;
  header: string;
  description: any;
};

const ProfileListItem: React.FC<Props> = ({ color, header, description }) => {
  return (
    <List.Item style={{ marginTop: "5px" }} as="a">
      <List.Content>
        <List.Header style={{ color }} content={header} />
        <List.Description>{description}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ProfileListItem;
