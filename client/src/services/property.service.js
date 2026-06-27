import api from "./api";

import axios from "axios";

const API = "http://localhost:5000/api/v1/properties";

const getToken = () => localStorage.getItem("token");

// ❤️ SAVE PROPERTY
export const saveProperty = (propertyId) => {
  return axios.post(
    `${API}/save`,
    { propertyId },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );
};

// 📩 SEND INQUIRY
export const sendInquiry = (data) => {
  return axios.post(`${API}/inquiry`, data);
};

export const getProperties = async () => {
  const response = await api.get("/properties");
  return response.data;
};

export const getPropertyById = (id) => {
  return api.get(`/properties/${id}`);
};