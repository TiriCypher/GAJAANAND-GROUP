import axios from "axios";

const API =
  "http://localhost:5000/api/admin";

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