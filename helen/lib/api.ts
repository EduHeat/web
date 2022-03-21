import instance from 'axios';
import Cookies from 'js-cookie';

const axios = instance.create({
  baseURL: 'http://localhost:8000',
});

export async function login(email: string, password: string) {
  const res = await axios.post('/api/sessions', {
    email,
    password,
  });
  console.log(res);
  const {
    data: { accessToken, refreshToken },
  } = res;
  if (accessToken && refreshToken) {
    Cookies.set('eh_token', accessToken);
    Cookies.set('eh_refresh', refreshToken);
  }
  axios.defaults.headers.common['x-refresh'] = refreshToken;
  axios.defaults.headers.common['authorization'] = accessToken;
}

export async function getSessions() {
  const res = await axios.get('/api/sessions');
  console.log(res);
}

export async function register() {}

export async function logout() {}

export async function getPosts() {}

export async function getPost() {}

export async function deletePost() {}

export async function updatePost() {}

export async function likePost() {}

export async function createPost() {}
