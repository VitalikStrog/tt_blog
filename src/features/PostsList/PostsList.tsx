import React, { useEffect } from 'react';
import './PostsList.scss';

import { PostCard } from '../PostCard';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadPosts, selectPosts, selectUpdate } from './postsListSlice';

export const PostsList: React.FC = () => {
  const posts = useAppSelector(selectPosts);
  const update = useAppSelector(selectUpdate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [update]);

  return (
    <div className="postsList">
      {posts.map(post => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}
