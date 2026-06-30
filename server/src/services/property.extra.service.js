import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/property`;

// ❤️ SAVE
export const savePropertyAPI = (propertyId, token) =>
  axios.post(
    `${API}/save`,
    { propertyId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

// 📩 INQUIRY
export const sendInquiryAPI = (data) =>
  axios.post(`${API}/inquiry`, data);