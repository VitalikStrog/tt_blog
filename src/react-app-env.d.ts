type Post = {
  id: number;
  title: string;
  body: string;
  comments: PostComment[];
}

type PostComment = {
  id: number;
  postId: number;
  body: string;
}
