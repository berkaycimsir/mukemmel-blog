import { AccordionTitleProps } from "semantic-ui-react/dist/commonjs/modules/Accordion/AccordionTitle";

export type IOnDeleteBlogFunc = (
  e: React.MouseEvent<SVGSVGElement, MouseEvent>
) => void;

export type IHandleClickFunc = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  data: AccordionTitleProps
) => void;

export type IDeleteTagFromArrayFunc = (tagValue: string) => void;
