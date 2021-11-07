import * as React from 'react';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '../app/hooks';
import { selectPostId, selectUpdate } from './PostsList/postsListSlice';
import { useEffect, useState } from 'react';
import { loadPost } from './PostsList/postsListAPI';
import { EditForm } from './EditForm';
import { NewCommentForm } from './NewCommentForm';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PostDetails = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [post, setPost] = useState<Post>({ id: 0, title: '', body: '', comments: [] });
  const postId = useAppSelector(selectPostId);
  const update = useAppSelector(selectUpdate);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(false);
    loadPost(postId)
      .then(loadedPost => setPost(loadedPost));
  }, [postId, update])

  return (
    <Card sx={{ width: 400, minHeight: 224 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.id}
          </Avatar>
        }
        action={
          <EditForm />
        }
        title={post.title}
      />
      <CardContent sx={{ minHeight: 60 }}>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <NewCommentForm />
        <ExpandMore
          disabled={post.comments.length === 0}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph>
            {post.comments.map(comment => (
              <li key={comment.id}>
                {comment.body}
              </li>
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
