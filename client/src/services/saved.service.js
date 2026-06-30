import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/properties`;

export const getSavedProperties = (token) => {
  return axios.get(
    `${API}/saved`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};