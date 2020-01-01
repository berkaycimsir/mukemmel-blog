import {
  HtmlLabelProps,
  SemanticCOLORS,
  SemanticShorthandItem
} from "semantic-ui-react/dist/commonjs/generic";

export type Props = {
  size?: "big" | "small" | "tiny" | "medium" | "large";
  progress?: boolean | "percent" | "value" | "ratio";
  percent?: React.ReactText;
  active?: boolean;
  indicating?: boolean;
  style?: object;
  label?: SemanticShorthandItem<HtmlLabelProps>;
  color?: SemanticCOLORS;
};
