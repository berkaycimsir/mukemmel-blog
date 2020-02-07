import * as React from "react";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";
import { useMutation } from "react-apollo";
import { SEND_MAIL } from "../../graphql/User/mutations";
import {
  SendContactMailReturnData,
  SendContactMailVariables
} from "../../@types/interfaces/PageInterfaces/Contact/contactform.interfaces";
import Error from "../../components/Error/Error";

const ContactForm: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [subject, setSubject] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [error, setError] = React.useState<boolean | undefined>(undefined);
  const [sending, setSending] = React.useState<boolean>(false);

  const [sendMail, { loading }] = useMutation<
    SendContactMailReturnData,
    SendContactMailVariables
  >(SEND_MAIL);

  const formValidate = (): boolean => !name || !email;

  const resetInputValues = (): void => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const onSendMail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendMail({ variables: { name, email, subject, message } }).then(
      ({ data }) => {
        resetInputValues();
        setSending(true);
        setError(!data.sendMail);
        if (!loading) {
          setTimeout(() => {
            setError(false);
            setSending(false);
          }, 2000);
        }
      }
    );
  };

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSendMail(e)}>
      <Form.Field required error={error}>
        <label>Adınız *gerekli (your name *required)</label>
        <Input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          fluid
          type="text"
          placeholder="adınız (your name)"
        />
      </Form.Field>
      <Form.Field required error={error}>
        <label>Email *gerekli (your email *required)</label>
        <Input
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          fluid
          type="text"
          placeholder="email"
        />
      </Form.Field>
      <Form.Field error={error}>
        <label>Konu (Subject)</label>
        <Input
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSubject(e.target.value);
          }}
          fluid
          type="text"
          placeholder="konu (subject)"
        />
      </Form.Field>
      <Form.Field error={error}>
        <label>Mesajınız (your message)</label>
        <TextArea
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
          type="text"
          placeholder="mesajınız (your message)"
          style={{ minHeight: "300px" }}
        />
      </Form.Field>
      {error && (
        <Error
          errorMessage={
            error ? "Bir şeyler yanlış gitti! Tekrar deneyiniz." : null
          }
        />
      )}
      {!error && sending && (
        <Message
          color="green"
          content="Mail başarıyla gönderildi! (Mail sent successfully)"
        />
      )}
      <Button
        loading={loading}
        disabled={loading || formValidate()}
        color="blue"
        inverted
        content="Gönder (Send)"
        fluid
        style={{ marginTop: "5px" }}
      />
    </Form>
  );
};

export default ContactForm;
