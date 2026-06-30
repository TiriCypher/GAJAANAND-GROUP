import axios from "axios";

const API =
  `${import.meta.env.VITE_API_URL}/admin`;

export const getProperties = token =>
    axios.get(
        `${API}/properties`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`,
            },
        }
    );

export const deleteProperty = (
    id,
    token
) => {
    return axios.delete(
        `${API}/properties/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};

export const createProperty = (
    data,
    token
) => {
    return axios.post(
        `${API}/properties`,
        data,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`,
            },
        }
    );
};

export const getPropertyById = (
    id,
    token
) => {
    return axios.get(
        `${API}/properties/${id}`,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`,
            },
        }
    );
};

export const updateProperty = (
    id,
    data,
    token
) => {
    return axios.put(
        `${API}/properties/${id}`,
        data,
        {
            headers: {
                Authorization:
                    `Bearer ${token}`,
            },
        }
    );
};