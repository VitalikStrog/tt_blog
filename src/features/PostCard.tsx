import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { changePost, selectPostId } from './PostsList/postsListSlice';
import { removePost } from './PostsList/postsListSlice';

type Props = {
  post: Post;
};


export const PostCard: React.FC<Props> = ({ post }) => {
  const dispatch = useAppDispatch();
  const postId = useAppSelector(selectPostId);

  const selectPost = () => {
    if (post.id !== postId) {
      dispatch(changePost(post.id));
    } else {
      dispatch(changePost(0))
    }
  }

  const deletePost = () => {
    dispatch(changePost(0));
    dispatch(removePost(post.id));
  }

  return (
    <>
      <Card sx={{ minWidth: 350 }}>
        <CardActionArea onClick={() => selectPost()}>
          <CardContent sx={{ minHeight: 100 }}>
            <Typography gutterBottom variant="h5" component="div">
              {`Post #${post.id}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => deletePost()}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  )
}
