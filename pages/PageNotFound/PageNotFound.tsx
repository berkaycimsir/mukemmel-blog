import * as React from "react";
import {
  Container,
  Header,
  Divider,
  Message,
  Button,
  Grid
} from "semantic-ui-react";

const PageNotFound: React.FC = () => {
  return (
    <Container>
      <div style={{ marginTop: "40px" }}>
        <Header
          as="h2"
          className="blog-details-title"
          content="Böyle bir sayfamız bulunmamaktadır."
        />
        <Divider />
        <Message
          warning
          content="Şuan da böyle bir sayfamız bulunmamaktadır. Eğer isterseniz anasayfaya geri dönebilir, ya da bir sürü güzel içeriğimiz için bulunan linklere tıklayabilirsiniz."
        />
        <Button as="a" href="/" content="Anasayfa" color="violet" inverted />
        <Divider />
        <Message
          info
          content="İstediğiniz kategorideki blogları inceleyebilirsiniz!"
        />
        <Grid doubling columns={3}>
          <Grid.Column>
            <Button
              as="a"
              href="/category/javascript"
              color="brown"
              inverted
              content="Javascript"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              as="a"
              href="/category/php"
              color="red"
              inverted
              content="Php"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              as="a"
              href="/category/csharp"
              color="blue"
              inverted
              content="C#"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              as="a"
              href="/category/html"
              color="green"
              inverted
              content="Html"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              as="a"
              href="/category/python"
              color="orange"
              inverted
              content="Python"
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              as="a"
              href="/category/technology"
              color="pink"
              inverted
              content="Teknoloji"
            />
          </Grid.Column>
        </Grid>
        <Divider />
        <Message
          color="violet"
          content="Hakkımda daha fazla şey öğrenmek istiyorsanız:"
        />
        <Button
          color="purple"
          inverted
          content="Hakkımda"
          as="a"
          href="/about"
        />
        <Divider />
        <Message
          color="orange"
          content="Benimle iletişime geçip site hakkında düşüncelerinizi paylaşmak isterseniz:"
        />
        <Button
          color="orange"
          content="İletişim"
          as="a"
          href="/contact"
          inverted
        />
        <Divider />
        <Message
          color="teal"
          content="Sitemi kullanan diğer insanlarla iletişime geçip yazılar ya da günlük hayattan konular hakkında tartışmak, düşüncelerinizi paylaşmak isterseniz sosyal sayfasına gidebilirsiniz:"
        />
        <Button color="blue" inverted as="a" href="/social" content="Sosyal" />
        <div style={{ marginTop: "50px" }} />
        <Divider />
        <Message content="Sitemi ziyaret ettiğiniz için teşekkür ederim. İyi okumalar!" />
      </div>
    </Container>
  );
};

export default PageNotFound;
