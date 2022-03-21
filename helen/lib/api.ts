import axios from 'axios';

async function get() {
  const res = await axios.post('http://localhost:8000/api/sessions', {
    email: 'sid@sid.com',
    password: 'sidharth',
  });
  console.log(res);
  const {
    data: { accessToken, refreshToken },
  } = res;
  axios.defaults.headers.common['x-refresh'] = refreshToken;
  axios.defaults.headers.common['authorization'] = accessToken;
}

async function getAccess() {
  const res = await axios.get('http://localhost:8000/api/sessions');
  console.log(res);
}
