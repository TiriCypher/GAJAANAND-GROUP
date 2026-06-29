import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  useSelector,
} from "react-redux";

import { toast } from "react-toastify";

import PropertyForm from "../components/PropertyForm";

import {
  getPropertyById,
  updateProperty,
} from "../services/adminProperty.service";

function EditProperty() {
  const { id } = useParams();

  const navigate =
    useNavigate();

  const { accessToken } =
    useSelector(
      state => state.auth
    );

  const [property, setProperty] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    const fetchProperty =
      async () => {
        try {
          const response =
            await getPropertyById(
              id,
              accessToken
            );

          setProperty(
            response.data.data
          );
        } catch (err) {
          console.log(err);
        }
      };

    if (accessToken) {
      fetchProperty();
    }
  }, [id, accessToken]);

  const handleSubmit =
    async data => {
      try {
        setLoading(true);

        await updateProperty(
          id,
          data,
          accessToken
        );

        toast.success(
          "Property updated"
        );

        navigate(
          "/admin/properties"
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

  if (!property) {
    return (
      <h2>
        Loading...
      </h2>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-black">
        Edit Property
      </h1>

      <div className="bg-white p-8 rounded-3xl shadow">

        <PropertyForm
          defaultValues={
            property
          }
          onSubmit={
            handleSubmit
          }
          loading={loading}
        />

      </div>

    </div>
  );
}

export default EditProperty;