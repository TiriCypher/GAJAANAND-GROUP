import axios from "axios";

const API = "http://localhost:5000/api/property";

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