import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Shield,
  LogOut,
  Building2,
  Heart,
  BadgeCheck,
  Home,
  ArrowLeft,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getSavedProperties } from "../../services/saved.service";

function Profile() {
  const { user, accessToken } =
    useSelector(
      (state) => state.auth
    );

  const [savedCount, setSavedCount] =
    useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  useEffect(() => {
    const fetchSaved = async () => {
      try {
        const response =
          await getSavedProperties(
            accessToken
          );

        setSavedCount(
          response.data.total
        );
      } catch (err) {
        console.log(err);
      }
    };

    if (accessToken) {
      fetchSaved();
    }
  }, [accessToken]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FAFC] pt-28 pb-20 px-5">

      {/* Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF6A]/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0A1F44]/10 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Top Buttons */}
        <div className="flex justify-between mb-6">

          <button
            onClick={() => navigate("/")}
            className="
              flex items-center gap-2
              rounded-xl
              bg-white
              px-5 py-3
              shadow-md
              hover:shadow-xl
              transition
            "
          >
            <ArrowLeft size={18} />
            Home
          </button>

          <button
            onClick={() => navigate("/properties")}
            className="
              flex items-center gap-2
              rounded-xl
              bg-[#0A1F44]
              text-white
              px-5 py-3
              shadow-lg
              hover:bg-[#132D61]
              transition
            "
          >
            <Home size={18} />
            Browse Properties
          </button>

        </div>

        <div className="overflow-hidden rounded-[35px] bg-white shadow-[0_35px_80px_rgba(0,0,0,0.15)]">

          {/* Hero */}
          <div className="relative overflow-hidden bg-[#0A1F44] py-20">

            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#D4AF6A]/10 blur-3xl"></div>

            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative text-center">

              <div className="
                  mx-auto
                  flex
                  h-36
                  w-36
                  items-center
                  justify-center
                  rounded-full
                  border-[6px]
                  border-white
                  bg-gradient-to-r
                  from-[#D4AF6A]
                  to-[#F7E2A7]
                  shadow-2xl
              ">
                <User
                  size={65}
                  className="text-[#0A1F44]"
                />
              </div>

              <h1 className="mt-6 text-5xl font-bold text-white">
                {user?.firstName} {user?.lastName}
              </h1>

              <p className="mt-3 text-lg text-gray-300">
                Premium Customer Account
              </p>

              <div className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/10
                  px-5
                  py-2
                  text-white
              ">
                <BadgeCheck size={18} />
                Verified Member
              </div>

            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-5 mb-10">

              <div className="
                  rounded-3xl
                  bg-gradient-to-br
                  from-[#FFF8EA]
                  to-white
                  p-7
                  text-center
                  shadow-md
              ">
                <Heart
                  size={34}
                  className="mx-auto text-[#D4AF6A]"
                />

                <p className="mt-4 text-gray-500">
                  Saved Properties
                </p>

                <h2 className="text-3xl font-bold text-[#0A1F44]">
                  {savedCount}
                </h2>
              </div>

              <div className="
                  rounded-3xl
                  bg-gradient-to-br
                  from-green-50
                  to-white
                  p-7
                  text-center
                  shadow-md
              ">
                <BadgeCheck
                  size={34}
                  className="mx-auto text-green-500"
                />

                <p className="mt-4 text-gray-500">
                  Account Status
                </p>

                <h2 className="text-2xl font-bold text-green-500">
                  Active
                </h2>
              </div>

              <div className="
                  rounded-3xl
                  bg-gradient-to-br
                  from-blue-50
                  to-white
                  p-7
                  text-center
                  shadow-md
              ">
                <Building2
                  size={34}
                  className="mx-auto text-[#0A1F44]"
                />

                <p className="mt-4 text-gray-500">
                  Member Since
                </p>

                <h2 className="text-2xl font-bold text-[#0A1F44]">
                  2025
                </h2>
              </div>

            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-6">

              <div className="
                  rounded-3xl
                  border
                  p-6
                  hover:shadow-lg
                  transition
              ">
                <div className="flex items-center gap-4">
                  <Mail
                    size={30}
                    className="text-[#D4AF6A]"
                  />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email Address
                    </p>

                    <h3 className="font-semibold text-lg">
                      {user?.email}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="
                  rounded-3xl
                  border
                  p-6
                  hover:shadow-lg
                  transition
              ">
                <div className="flex items-center gap-4">
                  <Shield
                    size={30}
                    className="text-[#D4AF6A]"
                  />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Role
                    </p>

                    <h3 className="font-semibold text-lg capitalize">
                      {user?.role}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="
                  rounded-3xl
                  border
                  p-6
                  hover:shadow-lg
                  transition
              ">
                <div className="flex items-center gap-4">
                  <Building2
                    size={30}
                    className="text-[#D4AF6A]"
                  />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Company
                    </p>

                    <h3 className="font-semibold text-lg">
                      GAJAANAND GROUP
                    </h3>
                  </div>
                </div>
              </div>

              <div className="
                  rounded-3xl
                  border
                  p-6
                  hover:shadow-lg
                  transition
              ">
                <div className="flex items-center gap-4">
                  <BadgeCheck
                    size={30}
                    className="text-green-500"
                  />

                  <div>
                    <p className="text-gray-500 text-sm">
                      Membership
                    </p>

                    <h3 className="font-semibold text-lg">
                      Premium User
                    </h3>
                  </div>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-5">

              <button
                onClick={() => navigate("/properties")}
                className="
                  rounded-2xl
                  bg-[#0A1F44]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-lg
                  hover:-translate-y-1
                  hover:bg-[#132D61]
                  transition
                "
              >
                Browse Properties
              </button>

              <button
                onClick={handleLogout}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-red-500
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-lg
                  hover:-translate-y-1
                  hover:bg-red-600
                  transition
                "
              >
                <LogOut size={22} />
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Profile;