import { ReturnData } from "../../../interfaces/PageInterfaces/SignUp/signup.interfaces";

export type IParseErrorMessageFunc = (data: ReturnData | undefined) => boolean;

export type IOnClickFunc = (e: React.FormEvent<HTMLFormElement>) => void;
