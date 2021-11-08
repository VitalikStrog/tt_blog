import React, { useState } from 'react';
import { createPost } from './PostsList/postsListSlice';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import { useAppDispatch } from '../app/hooks';

export const CreatePostForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const clearForm = () => {
    setTitle('');
    setBody('');
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    clearForm();
  };

  const createNewPost = () => {
    dispatch(createPost({ title, body }));
    handleClose();
    clearForm();
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create post</Button>
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
          onSubmit={createNewPost}
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
            label="Enter title"
            variant="outlined"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <TextField
            required
            id="outlined-basic"
            label="Enter post's content"
            variant="outlined"
            value={body}
            onChange={event => setBody(event.target.value)}
          />
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={handleClose} >Cancel</Button>
            <Button
              type="submit"
            >
              Create
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
