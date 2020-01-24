export type Props = {
  field: string;
  text: string;
  setUpdate: React.Dispatch<
    React.SetStateAction<{ updating?: boolean; text?: string }>
  >;
};
