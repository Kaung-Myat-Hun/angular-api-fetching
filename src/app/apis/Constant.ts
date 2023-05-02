export const FetchUsersAPI: string =
  'https://jsonplaceholder.typicode.com/users';

export const GetUserDetailAPI = (id: number) =>
  `https://jsonplaceholder.typicode.com/users/${id}`;

export const GetPostsAPI = `https://jsonplaceholder.typicode.com/posts`;

export const GetSinglePostAPI = (id: number) =>
  `https://jsonplaceholder.typicode.com/posts/${id}`;

export const FakeStoreAPI = `https://fakestoreapi.com/products`;
