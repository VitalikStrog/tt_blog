import React, { useEffect, useState } from 'react';
import { asyncUpdatePost, selectPostId } from './PostsList/postsListSlice';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { loadPost } from './PostsList/postsListAPI';

export const EditForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const postId = useAppSelector(selectPostId);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useAppDispatch();

  const clearForm = () => {
    setTitle('');
    setBody('');
  };

  const updatePost = () => {
    const params = { postId, updatedPost: { title, body }}
    dispatch(asyncUpdatePost(params))
    handleClose();
    clearForm();
  };

  useEffect(() => {
    loadPost(postId)
      .then(loadedPost => {
        setTitle(loadedPost.title);
        setBody(loadedPost.body);
      });
  }, [])

  return (
    <div>
      <IconButton aria-label="settings" onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        sx={{
          maxWidth: 400,
          maxHeight: 300,
          position: 'fixed',
          top: 50,
          margin: '0 auto',
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            bgcolor: '#eee',
            padding: 2,
            '& .MuiTextField-root': { m: 1, width: 380 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-basic"
            label="Edit title"
            variant="outlined"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Edit post's content"
            variant="outlined"
            value={body}
            onChange={event => setBody(event.target.value)}
          />
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleClose} >Cancel</Button>
            <Button onClick={updatePost}>Update</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
