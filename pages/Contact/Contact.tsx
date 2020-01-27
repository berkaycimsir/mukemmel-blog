import * as React from "react";
import { Segment, Container, Header, Divider } from "semantic-ui-react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <Container>
      <Segment color="purple">
        <Header content="İletişim (Contact)" as="h2" textAlign="center" />
        <Divider />
        <ContactForm />
      </Segment>
    </Container>
  );
};

export default Contact;
