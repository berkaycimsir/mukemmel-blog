export type Blog = {
  id: string;
  owner_id: string;
  title: string;
  content: string;
  tags: [string];
  likes: number;
  views: number;
  img: string;
  createdAt: Date;
};
