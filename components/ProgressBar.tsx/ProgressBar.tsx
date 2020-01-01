import * as React from "react";
import { Props } from "../../@types/interfaces/ComponentInterfaces/ProgressBar/progressbar.interfaces";
import {
  HtmlLabelProps,
  SemanticCOLORS,
  SemanticShorthandItem
} from "semantic-ui-react/dist/commonjs/generic";
import { Progress } from "semantic-ui-react";

const ProgressBar: React.FC<Props> = props => {
  const {
    active,
    color,
    indicating,
    label,
    percent,
    progress,
    size,
    style
  }: {
    size?: "big" | "small" | "tiny" | "medium" | "large";
    progress?: boolean | "percent" | "value" | "ratio";
    percent?: React.ReactText;
    active?: boolean;
    indicating?: boolean;
    style?: object;
    label?: SemanticShorthandItem<HtmlLabelProps>;
    color?: SemanticCOLORS;
  } = props;

  return (
    <Progress
      size={size}
      progress={progress}
      percent={percent}
      active={active}
      indicating={indicating}
      style={style}
      label={label}
      color={color}
    />
  );
};

export default ProgressBar;
