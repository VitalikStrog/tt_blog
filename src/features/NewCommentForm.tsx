import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createNewComment, selectPostId } from './PostsList/postsListSlice';

export const NewCommentForm = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [body, setBody] = useState('');
  const postId = useAppSelector(selectPostId);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonHandler = () => {
    dispatch(createNewComment({ postId, body }));
    handleClose();
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Add comment
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          padding: 5,
        }}
      >
        <TextField
          required
          id="filled-basic"
          label="Type comment"
          variant="outlined"
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          sx={{ height: 56}}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={buttonHandler}>Add</Button>
        </ButtonGroup>
      </Popover>
    </div>
  );
}
