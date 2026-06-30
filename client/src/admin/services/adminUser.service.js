import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/admin`;

export const getUsers = (
  token
) => {
  return axios.get(
    `${API}/users`,
    {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    }
  );
};