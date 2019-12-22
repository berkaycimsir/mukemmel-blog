export type User = {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
};

export type Blog = {
  id: string;
  owner_id: string;
  title: string;
  content: string;
  tags: [string];
  likes: number;
  img: string;
  views: number;
  createdAt: Date;
  comments?: [Comment];
  user?: User;
};

export type Comment = {
  id: string;
  blog_id: string;
  user_id: string;
  content: string;
  likes: number;
  createdAt: Date;
  user: User;
};
