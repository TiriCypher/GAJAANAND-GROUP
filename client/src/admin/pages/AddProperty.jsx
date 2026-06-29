import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import PropertyForm from "../components/PropertyForm";

import { uploadImages }
  from "../services/adminUpload.service";

import { createProperty }
  from "../services/adminProperty.service";

function AddProperty() {
  const { accessToken } =
    useSelector(
      state => state.auth
    );

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async data => {
      try {
        setLoading(true);

        const formData =
          new FormData();

        data.images.forEach(
          image => {
            formData.append(
              "images",
              image
            );
          }
        );

        const uploadResponse =
          await uploadImages(
            formData,
            accessToken
          );

        data.images =
          uploadResponse.data.data;

        console.log(data);

        await createProperty(
          data,
          accessToken
        );

        toast.success(
          "Property Added"
        );

        return true;
      } catch (err) {
        toast.error(
          err.response?.data?.message
        );

        return false;
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>

      <h1 className="text-4xl font-black mb-8">
        Add New Property
      </h1>

      <PropertyForm
        onSubmit={
          handleSubmit
        }
        loading={loading}
      />

    </div>
  );
}

export default AddProperty;