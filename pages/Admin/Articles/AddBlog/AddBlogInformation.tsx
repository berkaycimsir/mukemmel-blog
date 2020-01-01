import * as React from "react";
import { Icon, Grid, Step, Message } from "semantic-ui-react";
import { Title, Close, Done } from "@material-ui/icons";
import { Props } from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/AddBlog/addbloginformation.interfaces";

const AddBlogInformation: React.FC<Props> = ({
  isCategoryEmpty,
  isImgUrlEmpty,
  isSummaryEmpty,
  isTagsEmpty,
  isTitleEmpty
}) => (
  <>
    <Message
      size="small"
      icon={
        isTitleEmpty ? (
          <Close htmlColor="red" fontSize="large" />
        ) : (
          <Done htmlColor="green" fontSize="large" />
        )
      }
      header="Blog Başlığı"
      content="Blog başlığı ilgi çekicilik açısından çok önemlidir. Blog başlığı girmeyi unutmayın!"
    />
    <Message
      size="small"
      icon={
        isSummaryEmpty ? (
          <Close htmlColor="red" fontSize="large" />
        ) : (
          <Done htmlColor="green" fontSize="large" />
        )
      }
      header="Blog Özeti"
      content="Okuyucuyu bloğa çekmek için özet çok önemlidir. Blog özetini girmeyi unutmayın!"
    />
    <Message
      size="small"
      icon={
        isTagsEmpty ? (
          <Close htmlColor="red" fontSize="large" />
        ) : (
          <Done htmlColor="green" fontSize="large" />
        )
      }
      header="Etiketler"
      content="Etiketler google arama motorlarında yükseğe çıkmanızı sağlar. Mantıklı etiketler düşünüp sizde google'da en yüksek sıraya çıkabilirsiniz."
    />
    <Message
      size="small"
      icon={
        isCategoryEmpty ? (
          <Close htmlColor="red" fontSize="large" />
        ) : (
          <Done htmlColor="green" fontSize="large" />
        )
      }
      header="Kategori"
      content="Bloğunuzun konusuna göre site de doğru yerde gözükmesi için kategorinizi doğru seçiniz!"
    />
    <Message
      size="small"
      icon={
        isImgUrlEmpty ? (
          <Close htmlColor="red" fontSize="large" />
        ) : (
          <Done htmlColor="green" fontSize="large" />
        )
      }
      header="Blog Resmi"
      content="Bloğunuzu okumadan önce kullanıcı öncelikli olarak resimlere bakar! Siz de doğru resmi koyarak bloğunuzu daha ilgi çekici kılabilirsiniz!"
    />
  </>
);

export default AddBlogInformation;
