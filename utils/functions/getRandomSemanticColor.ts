import { SemanticCOLORS } from "semantic-ui-react/dist/commonjs/generic";

type IFunction = () => SemanticCOLORS;

export const getRandomColor: IFunction = (): SemanticCOLORS => {
  const colors: Array<SemanticCOLORS> = [
    "teal",
    "red",
    "blue",
    "violet",
    "purple",
    "green"
  ];

  const getRandomIndex: number = Math.floor(Math.random() * 6);
  return colors[getRandomIndex];
};
