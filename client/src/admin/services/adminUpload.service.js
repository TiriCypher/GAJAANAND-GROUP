import axios from "axios";

const API =
  "http://localhost:5000/api/upload";

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