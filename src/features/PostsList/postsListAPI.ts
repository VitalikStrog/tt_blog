const API_URL = 'https://bloggy-api.herokuapp.com';

export function loadAllPosts(): Promise<Post[]> {
  return fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => posts);
}

export function loadPost(postId: number): Promise<Post> {
  return fetch(`${API_URL}/posts/${postId}?_embed=comments`)
    .then(response => response.json())
    .then(post => post);
}

export function createNewPost(newPost: Partial<Post>) {
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ ...newPost }),
  })
    .then(response => response.json())
    .then(post => post);
}

export function deletePost(postId: number) {
  return fetch(`${API_URL}/posts/${postId}`, {
    method: "DELETE",
  })
    .then(response => response.json())
    .then(post => post);
}

export function updatePost(postId: number, body: Partial<Post> ) {
  console.log(postId, body);
  return fetch(`${API_URL}/posts/${postId}`, {
    method: "PUT",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ ...body }),
  })
    .then(response => response.json())
    .then(post => post);
}

export function createComment(body: { postId: number, body: string }) {
  return fetch(`${API_URL}/comments`, {
    method: "POST",
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ ...body }),
  })
    .then(response => response.json());
}
