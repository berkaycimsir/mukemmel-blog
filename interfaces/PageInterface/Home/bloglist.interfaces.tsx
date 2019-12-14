type Blog = {
  id: string;
  owner_id: string;
  title: string;
  content: string;
  tags: [string];
  likes: number;
  createdAt: Date;
};

export interface GetBlogsReturnType {
  blog: [Blog];
  errorMessage: string;
}
