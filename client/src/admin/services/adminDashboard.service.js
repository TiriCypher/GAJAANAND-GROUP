import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/admin`;

export const getDashboardStats = (
  token
) => {
  return axios.get(
    `${API}/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};