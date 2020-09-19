import axios from 'axios';
export const fetchUser = async (id: string) => {
  return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
    .data;
};
