import * as React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

const ContactForm: React.FC = () => {
  return (
    <Form>
      <Form.Field>
        <Form.Field>
          <label>Adınız *gerekli (your name *required)</label>
          <Input fluid type="text" placeholder="email" />
        </Form.Field>
        <Form.Field>
          <label>Email *gerekli (your email *required)</label>
          <Input fluid type="text" placeholder="email" />
        </Form.Field>
        <label>Konu (Subject)</label>
        <Input fluid type="text" placeholder="konu (subject)" />
      </Form.Field>
      <Form.Field>
        <label>Mesajınız (your message)</label>
        <TextArea
          fluid
          type="text"
          placeholder="mesajınız (your message)"
          style={{ minHeight: "300px" }}
        />
      </Form.Field>
      <Button
        color="purple"
        inverted
        content="Gönder (Send)"
        fluid
        style={{ marginTop: "5px" }}
      />
    </Form>
  );
};

export default ContactForm;
