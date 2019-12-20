import * as React from "react";
import { isBrowser } from "../../lib/isBrowser";
import { useQuery } from "react-apollo";
import { GET_BLOG_BY_ID } from "../../graphql/Blog/query";
import {
  GetBlogByIdReturnType,
  GetBlogByIdVariables
} from "../../@types/interfaces/PageInterfaces/BlogDetails/blogdetails.interfaces";
import Loading from "../../components/Loading/Loading";
import {
  Container,
  Image,
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message,
  Card,
  Divider
} from "semantic-ui-react";

const BlogDetails: React.FC = () => {
  const blogId: string = isBrowser && window.location.pathname.split("/")[3];

  const { data: getBlogByIdData, loading: getBlogByIdLoading } = useQuery<
    GetBlogByIdReturnType,
    GetBlogByIdVariables
  >(GET_BLOG_BY_ID, { variables: { id: blogId } });

  if (getBlogByIdLoading) return <Loading size={50} />;

  const { id, title, content, img, likes } = getBlogByIdData.blog.blog;

  return (
    <Container style={{ maxWidth: "1440px" }}>
      <Grid columns={2} stackable>
        <Grid.Column width={11}>
          <Card className="blog-card" color="violet" fluid centered>
            <Image src={img} />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
              <Divider />
              <Card.Description className="blog-detail-content">
                {content}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column width={5}>
          <Grid>
            <Grid.Column>
              <Form>
                <Segment>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />

                  <Button color="teal" fluid size="large">
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message>
                New to us? <a href="#">Sign Up</a>
              </Message>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default BlogDetails;
