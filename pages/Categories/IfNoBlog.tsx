import * as React from "react";
import { Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const IfNoBlog: React.FC = () => {
  return (
    <Message
      error
      header="Burada Hiç Blog Yazısı Yok!"
      content={
        <>
          Başka blog yazılarımızı okumak ister misin ? <br />
          <NavLink to="/category/php">Php</NavLink>
          <NavLink to="/category/python"> Python</NavLink>
          <NavLink to="/category/javascript"> Javascript</NavLink>
        </>
      }
    />
  );
};

export default IfNoBlog;
