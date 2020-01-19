export type Props = {
  id: string;
};

export interface LikeFeedReturnData {
  likeComment: boolean;
}

export interface LikeFeedVariables {
  id: string;
  isUnliking: boolean;
}
