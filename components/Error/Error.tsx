import * as React from "react";
import { Props } from "../../@types/interfaces/ComponentInterfaces/Error/error.interfaces";
import { Message } from "semantic-ui-react";

const Error: React.FC<Props> = ({ errorMessage }) => {
  return (
    <>
      {errorMessage !== null ? (
        <Message color="red">
          <Message.Header>Opps! There is an error here.</Message.Header>
          <Message.Content>
            <p>{errorMessage}</p>
          </Message.Content>
        </Message>
      ) : null}
    </>
  );
};

export default Error;
