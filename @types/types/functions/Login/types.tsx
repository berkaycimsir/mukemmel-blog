import { ReturnData } from "../../../interfaces/PageInterfaces/Login/login.interfaces";

export type IParseErrorMessageFunc = (data: ReturnData | undefined) => boolean;

export type IOnClickFunc = (e: React.MouseEvent<HTMLButtonElement>) => void;
