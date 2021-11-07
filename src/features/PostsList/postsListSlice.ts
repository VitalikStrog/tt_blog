import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { createNewPost, loadAllPosts, deletePost, updatePost, createComment } from './postsListAPI';

export interface postsListState {
  postsList: Post[];
  selectedPostId: number;
  update: number;
}

const initialState: postsListState = {
  postsList: [],
  selectedPostId: 0,
  update: 0,
};

export const loadPosts = createAsyncThunk(
  'postsList/loadPosts',
  async () => {
    const response = await loadAllPosts();

    return response;
  }
);

export const createPost = createAsyncThunk(
  'postsList/createPost',
  async (newPost: Partial<Post>) => {
    const response = await createNewPost(newPost);

    return response;
  }
);

export const removePost = createAsyncThunk(
  'postsList/deletePost',
  async (postId: number) => {
    const response = await deletePost(postId);

    return response;
  }
);

export const asyncUpdatePost = createAsyncThunk(
  'postsList/updatePost',
  async (params: { postId: number, updatedPost: Partial<Post>}) => {
    const response = await updatePost(params.postId, params.updatedPost);

    return response;
  },
);

export const createNewComment = createAsyncThunk(
  'postsList/createComment',
  async (params: {postId: number, body: string }) => {
    const response = await createComment(params);

    return response;
  }
)

export const postsListSlice = createSlice({
  name: 'postsList',
  initialState,
  reducers: {
    changePost: (state, action) => {
      state.selectedPostId = action.payload;
    },
    setUpdate: (state) => {
      state.update = Math.random();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.postsList = action.payload;
      })
      .addCase(removePost.fulfilled, (state) => {
        state.update = Math.random();
      })
      .addCase(createPost.fulfilled, (state) => {
        state.update = Math.random();
      })
      .addCase(createNewComment.fulfilled, (state) => {
        state.update = Math.random();
      })
      .addCase(asyncUpdatePost.fulfilled, (state) => {
        state.update = Math.random();
      })
  }
})

export const { changePost, setUpdate } = postsListSlice.actions;

export const selectPosts = (state: RootState) => state.posts.postsList;
export const selectPostId = (state: RootState) => state.posts.selectedPostId;
export const selectUpdate = (state: RootState) => state.posts.update;

export default postsListSlice.reducer;
