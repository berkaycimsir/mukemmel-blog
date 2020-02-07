import * as React from "react";
import {
  Segment,
  Container,
  Header,
  Divider,
  Message,
  Grid,
  Button,
  Image
} from "semantic-ui-react";
import ContactForm from "./ContactForm";
import {
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  YouTube,
  Facebook
} from "@material-ui/icons";

const Contact: React.FC = () => {
  return (
    <Container>
      <Segment.Group>
        <Segment color="purple">
          <Header content="İletişim (Contact)" as="h2" textAlign="center" />
          <Divider />
          <ContactForm />
        </Segment>
        <Segment>
          <Message
            content="Ayrıca bana aşağıdaki sosyal medya hesaplarımdan da ulaşabilirsiniz!"
            color="blue"
          />
          <Grid doubling columns={6}>
            <Grid.Column>
              <Button
                as="a"
                href="https://twitter.com/bekodev"
                target="_blank"
                color="twitter"
                content="Twitter"
                icon={
                  <Image
                    style={{ marginRight: "4px" }}
                    children={<Twitter />}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                as="a"
                href="https://instagram.com/brky.js"
                color="instagram"
                content="Instagram"
                target="_blank"
                icon={
                  <Image
                    style={{ marginRight: "4px" }}
                    children={<Instagram />}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                as="a"
                href="https://www.linkedin.com/in/berkay-%C3%A7im%C5%9Fir-781b6a182/"
                color="linkedin"
                content="Linkedin"
                target="_blank"
                icon={
                  <Image
                    style={{ marginRight: "4px" }}
                    children={<LinkedIn />}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                as="a"
                href="https://github.com/berkaycimsir"
                color="black"
                content="Github"
                target="_blank"
                icon={
                  <Image style={{ marginRight: "4px" }} children={<GitHub />} />
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                as="a"
                href="https://www.youtube.com/channel/UCLYwFy3gmcbc2gW-5hs1YCQ?view_as=subscriber"
                color="youtube"
                content="Youtube"
                target="_blank"
                icon={
                  <Image
                    style={{ marginRight: "4px" }}
                    children={<YouTube />}
                  />
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Button
                as="a"
                href="https://www.facebook.com/brkyjs-1148022438710199/"
                color="facebook"
                content="Facebook"
                target="_blank"
                icon={
                  <Image
                    style={{ marginRight: "4px" }}
                    children={<Facebook />}
                  />
                }
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </Container>
  );
};

export default Contact;
