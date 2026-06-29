import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import PropertyTable from "../components/PropertyTable";
import { toast } from "react-toastify";

import {
  getProperties,
  deleteProperty,
} from "../services/adminProperty.service";

function Properties() {
  const { accessToken } =
    useSelector(
      state => state.auth
    );

  const [properties, setProperties] =
    useState([]);

  const handleDelete =
    async (id) => {
      try {
        await deleteProperty(
          id,
          accessToken
        );

        setProperties(
          properties.filter(
            (property) =>
              property._id !== id
          )
        );

        toast.success(
          "Property deleted"
        );
      } catch (err) {
        console.log(err);

        toast.error(
          "Delete failed"
        );
      }
    };

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const response =
            await getProperties(
              accessToken
            );

          setProperties(
            response.data.data
          );
        } catch (err) {
          console.log(err);
        }
      };

    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-[#071B3B]">
            Properties
          </h1>

          <p className="text-gray-500">
            Manage all property listings.
          </p>
        </div>

        <Link
          to="/admin/properties/add"
          className="
          bg-[#D4AF6A]
          text-[#071B3B]
          px-6
          py-3
          rounded-2xl
          font-semibold
          hover:scale-105
          transition
          "
        >
          + Add Property
        </Link>

      </div>

      <PropertyTable
        properties={properties}
        onDelete={handleDelete}
      />

    </div>
  );
}

export default Properties;