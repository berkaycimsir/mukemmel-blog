import * as React from "react";
import { Popup, Icon } from "semantic-ui-react";
import { DeleteOutline } from "@material-ui/icons";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/deleteblog.interfaces";

const DeleteBlog: React.FC<Props> = ({ id }) => {
  return (
    <Popup
      trigger={<Icon children={<DeleteOutline htmlColor="black" />} />}
      content="Yorumunu sil!"
      size="small"
    />
  );
};

export default DeleteBlog;
