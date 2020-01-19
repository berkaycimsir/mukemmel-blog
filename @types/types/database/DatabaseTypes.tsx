export type User = {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  admin: boolean;
  createdAt: Date;
};

export type Blog = {
  id: string;
  owner_id: string;
  title: string;
  content: string;
  summary: string;
  tags: [string];
  likes: number;
  img: string;
  views: number;
  createdAt: Date;
  category: string;
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

export type Feed = {
  id: string;
  blog_id: string;
  user_id: string;
  reply_id: string;
  content: string;
  likes: number;
  createdAt: Date;
  user: User;
  replies: Feed[];
};
