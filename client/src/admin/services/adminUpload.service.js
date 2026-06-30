import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/upload`;

export const uploadImages = (
  formData,
  token
) => {
  return axios.post(
    `${API}/property-images`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data",
      },
    }
  );
};