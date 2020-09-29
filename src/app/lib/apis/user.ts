import axios from 'axios';
export const fetchUser = async (id: string) => {
  return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`))
    .data;
};
export const fetchUserList = async () => {
  return await fetch(`https://jsonplaceholder.typicode.com/users`).then((res) =>
    res.json(),
  );
};
