export type BlogCardProps = {
  blog: Blog;
};

type Blog = {
  id: string;
  owner_id: string;
  title: string;
  content: string;
  tags: [string];
  likes: number;
  img;
  createdAt: Date;
};

export interface GetBlogsReturnType {
  blogs: [Blog];
  errorMessage: string;
}
