import * as React from "react";
import { useState } from "react";
import {
  Accordion,
  Icon,
  Image,
  Input,
  Form,
  Label,
  SemanticCOLORS,
  Select,
  DropdownProps,
  Button,
  AccordionTitleProps
} from "semantic-ui-react";
import { ArrowDropDown } from "@material-ui/icons";
import {
  IHandleClickFunc,
  IDeleteTagFromArrayFunc,
  IAddBlogFunc
} from "../../../../@types/types/functions/Articles/types";
import {
  Props,
  AddBlogMutationReturnData,
  AddBlogMutationVariables
} from "../../../../@types/interfaces/PageInterfaces/Admin/Articles/AddBlog/addblogaccordion.interfaces";
import { useMutation } from "react-apollo";
import { ADD_BLOG } from "../../../../graphql/Blog/mutation";
import {
  GET_BLOGS,
  GET_TREND_BLOGS,
  GET_LAST_FOUR_BLOG
} from "../../../../graphql/Blog/query";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Error from "../../../../components/Error/Error";
import ProgressBar from "../../../../components/ProgressBar.tsx/ProgressBar";
import AddBlogInformation from "./AddBlogInformation";

const AddBlogOptionsAccordion: React.FC<Props & RouteComponentProps> = ({
  activeUser,
  content,
  setContent,
  history
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(5);
  // title input states
  const [title, setTitle] = useState<string>("");
  const [titleProgress, setTitleProgress] = useState<number>(0);
  // summary input states
  const [summary, setSummary] = useState<string>("");
  const [summaryProgress, setSummaryProgress] = useState<number>(0);
  // tags input states
  const [tags, setTags] = useState<string>("");
  // category states
  const [category, setCategory] = useState<any>("");
  // blog image states
  const [imgUrl, setImgUrl] = useState<string>("");
  // error handling states
  const [error, setError] = useState<string | null>(null);

  // add blog mutation
  const [createBlog, { loading }] = useMutation<
    AddBlogMutationReturnData,
    AddBlogMutationVariables
  >(ADD_BLOG, {
    awaitRefetchQueries: true,
    refetchQueries: [
      { query: GET_BLOGS },
      { query: GET_TREND_BLOGS },
      { query: GET_LAST_FOUR_BLOG }
    ]
  });

  // validating forms
  const formValidate: Function = (): boolean => {
    return !title || !content || !summary || !tags || !imgUrl || !category;
  };

  // reseting input values when user clicked the add blog button
  const resetInputValues: Function = (): void => {
    setTitle("");
    setTitleProgress(0);
    setSummary("");
    setSummaryProgress(0);
    setActiveIndex(5);
    setTags("");
    setCategory("");
    setImgUrl("");
    setContent("");
  };

  // add blog function, that will work when user press the add blog button
  const addBlog: IAddBlogFunc = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();

    const variables: AddBlogMutationVariables = {
      owner_id: activeUser.id,
      title: title.toUpperCase(),
      content: content.toString(),
      summary,
      tags: tags.split(","),
      img: imgUrl,
      category
    };

    if (!formValidate())
      createBlog({ variables }).then(({ data }) => {
        if (data.createBlog.errorMessage !== "No error.") {
          setError(data.createBlog.errorMessage);
        } else {
          setError(null);
        }
        resetInputValues();
        history.push("/admin/articles");
      });
  };

  // active accordion item
  const handleClick: IHandleClickFunc = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: AccordionTitleProps
  ): void => {
    event.preventDefault();
    const { index }: { index?: string | number } = data;
    const newIndex: any = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex as number);
  };

  // deleting tag from an array when user enter more then 5 tag.
  const deleteTagFromArray: IDeleteTagFromArrayFunc = (tagValue): void => {
    const newArray: Array<string> = tags
      .split(",")
      .filter(tag => tag !== tagValue);

    setTags(newArray.toString());
  };

  // category options
  const blogCategories: {
    key?: string;
    value?: string;
    text?: string;
  }[] = [
    { key: "1", value: "technology", text: "Teknoloji" },
    { key: "2", value: "javascript", text: "Javascript" },
    { key: "3", value: "php", text: "Php" },
    { key: "4", value: "csharp", text: "C#" },
    { key: "5", value: "python", text: "Python" },
    { key: "6", value: "html", text: "Html" }
  ];

  // check the input values and errors
  const isTitleEmpty: boolean =
    title === "" || title.length > 40 ? true : false;
  const isSummaryEmpty: boolean =
    summary === "" || summary.length > 200 ? true : false;
  const isTagsEmpty: boolean =
    tags === "" || tags.split(",").length >= 5 ? true : false;
  const isCategoryEmpty: boolean = category === "" ? true : false;
  const isImgUrlEmpty: boolean = imgUrl === "" ? true : false;

  // getting summary progress bar color according to percentage
  const getSummaryProgressColor: Function = (): SemanticCOLORS => {
    return summaryProgress < 45
      ? "green"
      : summaryProgress < 75
      ? "yellow"
      : "red";
  };

  // getting title progress bar color according to percentage
  const getTitleProgressColor: Function = (): SemanticCOLORS => {
    return titleProgress < 50 ? "green" : titleProgress < 75 ? "yellow" : "red";
  };

  // this progress bar controls all the conditions and give a permission to the share our blog.
  const getProgressBarPercent: Function = (): number => {
    let percent: number = 0;
    isTitleEmpty === false ? (percent += 20) : 0;
    isSummaryEmpty === false ? (percent += 20) : 0;
    isTagsEmpty === false ? (percent += 20) : 0;
    isCategoryEmpty === false ? (percent += 20) : 0;
    isImgUrlEmpty === false ? (percent += 20) : 0;

    return percent;
  };

  // progress bar percent
  const percent: number = getProgressBarPercent();

  return (
    <>
      <Accordion exclusive={false} styled>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Blog Başlığı
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <Label
            ribbon
            color={title.length > 40 ? "red" : null}
            content={
              title.length > 40
                ? `40 karakterden fazla girdiniz!`
                : "En fazla 40 karakter!"
            }
            pointing="below"
          />
          <Form reply>
            <Form.TextArea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setTitle(e.target.value);
                setTitleProgress(title.length * 2.5);
              }}
              type="text"
              value={title}
              placeholder="Bir başlık giriniz"
              style={{ minHeight: "200px" }}
              required
            />
          </Form>
          <ProgressBar
            active
            color={getTitleProgressColor()}
            label={`${title.length} karakter`}
            style={{ marginTop: "10px" }}
            percent={titleProgress}
          />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Blog Özeti
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <Label
            ribbon
            color={summary.length > 200 ? "red" : null}
            content={
              summary.length > 200
                ? `200 karakterden fazla girdiniz!`
                : "En fazla 200 karakter!"
            }
            pointing="below"
          />
          <Form reply>
            <Form.TextArea
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setSummary(e.target.value);
                setSummaryProgress((summary.length * 100) / 200);
              }}
              style={{ minHeight: "200px" }}
              value={summary}
              placeholder="Blog özeti giriniz"
              required
            />
          </Form>
          <ProgressBar
            active
            color={getSummaryProgressColor()}
            label={`${summary.length} karakter`}
            style={{ marginTop: "10px" }}
            percent={summaryProgress}
          />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Etiketler
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <div style={{ marginBottom: "8px" }}>
            {tags.split(",").map(tag => {
              if (tag !== " " && tag !== "")
                return (
                  <Label
                    key={tag}
                    style={{ marginLeft: "10px", marginTop: "6px" }}
                    color="violet"
                    icon
                  >
                    <span>{tag}</span>
                    <Icon
                      style={{ marginLeft: "3px", cursor: "pointer" }}
                      onClick={() => deleteTagFromArray(tag)}
                      children={<span>X</span>}
                    />
                  </Label>
                );
            })}
          </div>
          <Label
            ribbon
            pointing="below"
            color={tags.split(",").length > 5 ? "red" : null}
            content={
              tags.split(",").length > 5
                ? "5 ten fazla etiket girilemez!"
                : "Yazarken virgül koyarak ayırınız"
            }
          />
          <Form reply>
            <Form.TextArea
              disabled={tags.split(",").length > 5}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setTags(e.target.value);
              }}
              style={{ minHeight: "200px" }}
              value={tags}
              placeholder="Blog etiketlerini giriniz!"
              required
            />
          </Form>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Kategori
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <Label
            pointing="below"
            ribbon
            content="Kategori seçiniz!"
            color="teal"
          />
          <Select
            onChange={(
              e: React.SyntheticEvent<HTMLElement>,
              data: DropdownProps
            ) => {
              setCategory(data.value);
            }}
            fluid
            basic
            placeholder="Kategori seçiniz!"
            options={blogCategories}
          />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Blog Resmini Girin
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <Label
            pointing="below"
            ribbon
            content="Kategori seçiniz!"
            color="teal"
          />
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setImgUrl(e.target.value);
            }}
            type="url"
            value={imgUrl}
            fluid
            placeholder="Bir resim linki giriniz"
            required
          />
        </Accordion.Content>

        <Accordion.Title
          active
          index={5}
          onClick={(
            event: React.MouseEvent<HTMLDivElement, MouseEvent>,
            data: AccordionTitleProps
          ) => handleClick(event, data)}
        >
          <Image children={<ArrowDropDown />} />
          Bilgilendirme
          <div style={{ float: "right" }}>
            <Label
              color={percent === 100 ? "green" : "red"}
              content={
                percent === 0
                  ? "5 Eksik"
                  : percent === 20
                  ? "4 Eksik"
                  : percent === 40
                  ? "3 Eksik"
                  : percent === 60
                  ? "2 Eksik"
                  : percent === 80
                  ? "1 Eksik"
                  : "Tamamlandı"
              }
            />
          </div>
        </Accordion.Title>
        <Accordion.Content active>
          <AddBlogInformation
            isCategoryEmpty={isCategoryEmpty}
            isImgUrlEmpty={isImgUrlEmpty}
            isSummaryEmpty={isSummaryEmpty}
            isTagsEmpty={isTagsEmpty}
            isTitleEmpty={isTitleEmpty}
          />
        </Accordion.Content>
      </Accordion>
      <ProgressBar
        size="large"
        progress
        percent={percent}
        active
        indicating
        style={{ marginTop: "10px" }}
      />
      <Button
        color="teal"
        disabled={percent !== 100 || loading || formValidate()}
        loading={loading}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => addBlog(e)}
        content="Yayımla"
      />
      <Error errorMessage={error} />
    </>
  );
};

export default withRouter(AddBlogOptionsAccordion);
