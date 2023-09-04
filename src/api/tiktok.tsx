import axios from 'src/utils/axios';

export async function getPosts() {
  return await axios.get(`/posts`);
}
