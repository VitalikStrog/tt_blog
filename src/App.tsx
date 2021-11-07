import React from 'react';
import './App.css';
import { PostsList } from './features/PostsList/PostsList';
import { PostDetails } from './features/PostDetails'
import { useAppSelector } from './app/hooks';
import { selectPostId } from './features/PostsList/postsListSlice';
import { CreatePostForm } from './features/CreatePostForm';

const App: React.FC = () => {
  const postId = useAppSelector(selectPostId);

  return (
    <div className="App">
      <main className="main-content">
        <div className="group">
          <CreatePostForm />
          <div className="sidebar">
            <PostsList />
          </div>
        </div>
        <div className="content">
          {postId
            ? <PostDetails />
            : (
              <div className="selection-message">
                {'Click on post to select'}
              </div>
            )
          }
        </div>
      </main>
    </div>
  );
}

export default App;
