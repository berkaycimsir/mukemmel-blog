const menGenderImageUrl: Array<string> = [
  "https://react.semantic-ui.com/images/avatar/small/joe.jpg"
];

const womenGenderImageUrl: Array<string> = [
  "https://react.semantic-ui.com/images/avatar/small/stevie.jpg"
];

type IFunction = (gender: string) => string;

export const getImageUrlByGender: IFunction = (gender: string): string => {
  return gender === "men" ? menGenderImageUrl[0] : womenGenderImageUrl[0];
};
