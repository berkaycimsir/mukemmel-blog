import * as React from "react";
import { Grid, Header, Divider, Segment } from "semantic-ui-react";
import {
  Code,
  DeveloperMode,
  LibraryMusic,
  DeveloperBoardOutlined,
  WorkOutline
} from "@material-ui/icons";
import { getRandomColor } from "../../utils/functions/getRandomSemanticColor";

const AboutText: React.FC = () => {
  const specifiedText: object = {
    marginTop: "10px",
    marginBottom: "10px",
    display: "inline-block",
    background: "#9370DB",
    color: "white",
    border: "1px solid #9370DB",
    borderRadius: "4px",
    paddingLeft: "3px",
    paddingRight: "3px",
    fontSize: "14px"
  };

  return (
    <>
      Belli bir zamana kadar bilgisayarı bir oyun oynama aracı olarak gördüm.
      Ortaokulda görmüş olduğum bilişim teknolojileri dersinde Scratch, Kodu
      Game Lab, gibi programlarda kendimce basit oyunlar geliştirmeye
      başlamıştım. Hatta bir gün oyunum, okulda televizyonlara çıkmıştı.
      <br />
      <span style={specifiedText}>
        O günden sonra kod blokları ile geliştirmiş olduğum bu oyunu, gerçek
        kodlarla geliştirmek istemiştim.
      </span>
      <br /> Araştırmalar yaptım, ve oyun geliştirmek diye giriştiğim bu işte
      kendimi web geliştirirken buldum. Html, Css, Javascript gibi basit web
      teknolojileri ile bir nevi kendi "Scratch" imi geliştirmiştim. Kod
      bloklarını sürükleyip başlata basıldığında arkada fonksiyonların çalıştığı
      ama kullanıcıya güzel görünen basit bir simülasyon oluşuyordu. Daha sonra
      bir yerde takılı kalınca bu davadan vazgeçip hayatıma devam etmiştim.
      <br />
      <span style={specifiedText}>
        Ta ki eski bilgisayar hocam ile ufak bir konuşma yapana kadar.
      </span>
      <br /> Bana çok şey anlattı şu an basit gelen şeyler o zaman bir sihir
      gibi gelmişti bana. Kendi kendime, "Millet yapabiliyorsa, bende
      yapabilirim!", demiştim. Daha sonra teknolojiler teknolojileri, bilgiler
      bilgileri getirdi ve şuan ki bulunduğum noktaya geldim. <br />
      Gün geçtikçe de gelişiyorum.
      <Divider />
      <div style={{ marginTop: "20px" }}>
        <Grid columns={2} stackable>
          <Grid.Column>
            <Segment color={getRandomColor()}>
              <Header
                as="h3"
                icon={
                  <DeveloperBoardOutlined
                    fontSize="large"
                    style={{ marginRight: "10px" }}
                  />
                }
                content="Web geliştirme"
              />
              <Divider />
              <span className="blog-detail-content">
                Uzun zamandır Javascript ile web geliştiriyorum.{" "}
                <span style={specifiedText}>React, Nodejs, Graphql</span> gibi
                teknolijiler favorim. Javascript'ten vazgeçmeye de niyetim yok
                :)
              </span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color={getRandomColor()}>
              <Header
                as="h3"
                icon={
                  <DeveloperMode
                    fontSize="large"
                    style={{ marginRight: "10px" }}
                  />
                }
                content="Diller"
              />
              <Divider />
              <span className="blog-detail-content">
                Şu an iyi bildiğim diyebileceğim diller sadece{" "}
                <span style={specifiedText}>Javascript ve Typescript.</span>{" "}
                Onun dışında biraz C# ve Python bilgim bulunmakta.
              </span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color={getRandomColor()}>
              <Header
                as="h3"
                icon={
                  <LibraryMusic
                    fontSize="large"
                    style={{ marginRight: "10px" }}
                  />
                }
                content="Müzik"
              />
              <Divider />
              <span className="blog-detail-content">
                En çok dinlediğim müzik türü{" "}
                <span style={specifiedText}>Türkçe rap'tir.</span> Fakat zaman
                zaman türkü de dinlerim.
              </span>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color={getRandomColor()}>
              <Header
                as="h3"
                icon={
                  <WorkOutline
                    fontSize="large"
                    style={{ marginRight: "10px" }}
                  />
                }
                content="İş"
              />
              <Divider />
              <span className="blog-detail-content">
                Şuan da çalışacak durumda olmadığım için herhangi bir şirkette
                çalışmıyorum fakat zaman zaman{" "}
                <span style={specifiedText}>Freelance</span> olarak çalışıyorum.
              </span>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    </>
  );
};

export default AboutText;
