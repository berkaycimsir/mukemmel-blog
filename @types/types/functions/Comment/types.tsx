export type IOnUpdateCommentFunc = (
  e: React.FormEvent<HTMLFormElement>
) => void;

export type IOnLikeCommentFunc = (e: React.MouseEvent<SVGSVGElement>) => void;

export type IOnDeleteCommentFunc = (e: React.MouseEvent<SVGSVGElement>) => void;

export type IOnSubmitFunc = (e: React.FormEvent<HTMLFormElement>) => void;
