import { client } from './client';

const login = (data) => {
  return client.post('/auth/login', data);
};

export { login };
