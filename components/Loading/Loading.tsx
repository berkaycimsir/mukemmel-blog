import * as React from "react";
import { HashLoader } from "react-spinners";
import { Props } from "../../@types/interfaces/ComponentInterfaces/Loading/loading.interfaces";

const Loading: React.FC<Props> = ({ size }) => (
  <HashLoader size={size} color={"#e15b64"} />
);

export default Loading;
