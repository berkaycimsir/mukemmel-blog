export interface SendContactMailReturnData {
  sendMail: boolean;
}

export interface SendContactMailVariables {
  name: string;
  email: string;
  subject?: string;
  message?: string;
}
