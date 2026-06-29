import axios from "axios";

const API =
  "http://localhost:5000/api/properties";

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