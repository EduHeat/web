import instance from 'axios';
import Cookies from 'js-cookie';
import { Login, Register } from './types';

const axios = instance.create({
  baseURL: 'http://localhost:8000',
});

export async function login(login: Login) {
  const res = await axios.post('/api/sessions', {
    ...login,
  });
  const {
    data: { accessToken, refreshToken },
  } = res;
  if (accessToken && refreshToken) {
    Cookies.set('eh_token', accessToken);
    Cookies.set('eh_refresh', refreshToken);
  }
  axios.defaults.headers.common['x-refresh'] = refreshToken;
  axios.defaults.headers.common['authorization'] = accessToken;
  return res;
}

export async function getSessions() {
  const res = await axios.get('/api/sessions');
  console.log(res);
}

export async function register(register: Register) {
  const res = await axios.post('/api/sessions', {
    ...register,
  });
  console.log(res);
  return res;
}

export async function logout() {}

export async function getPosts() {}

export async function getPost() {}

export async function deletePost() {}

export async function updatePost() {}

export async function likePost() {}

export async function createPost() {}
