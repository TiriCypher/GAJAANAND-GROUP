import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../features/auth/validation/registerSchema";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { register as registerUser } from "../../services/auth.service";
import { loginSuccess } from "../../features/auth/authSlice";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Building2,
} from "lucide-react";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      };

      const response = await registerUser(payload);

      dispatch(loginSuccess(response.data));

      toast.success(response.message);

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-5 py-16">

      {/* Background Decorations */}

      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF6A]/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0A1F44]/10 blur-3xl"></div>

      {/* Register Card */}

      <div className="relative w-full max-w-lg">

        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#D4AF6A] to-[#F7E2A7] p-[1px]">

          <div className="h-full w-full rounded-3xl bg-white/95 backdrop-blur-xl"></div>

        </div>

        <div className="relative rounded-3xl bg-white/90 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] px-8 py-10">

          {/* Logo */}

          <div className="flex justify-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0A1F44] shadow-xl">

              <Building2 size={34} className="text-[#D4AF6A]" />

            </div>

          </div>

          {/* Heading */}

          <div className="mt-6 text-center">

            <h1 className="text-4xl font-bold text-[#0A1F44]">

              Create Account

            </h1>

            <p className="mt-3 text-sm tracking-[4px] uppercase text-[#D4AF6A]">

              BUILDING TRUST. CREATING VALUE.

            </p>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-5"
          >

            {/* First Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">

                First Name

              </label>

              <div className="relative">

                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                  size={20}
                />

                <input
                  {...register("firstName")}
                  placeholder="Enter first name"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20"
                />

              </div>

              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}

            </div>

            {/* Last Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">

                Last Name

              </label>

              <div className="relative">

                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                  size={20}
                />

                <input
                  {...register("lastName")}
                  placeholder="Enter last name"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20"
                />

              </div>

              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">

                Email Address

              </label>

              <div className="relative">

                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                  size={20}
                />

                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20"
                />

              </div>

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">

                Password

              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                  size={20}
                />

                <input
                  {...register("password")}
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20"
                />

              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

            </div>

            {/* Confirm Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold text-gray-700">

                Confirm Password

              </label>

              <div className="relative">

                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                  size={20}
                />

                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20"
                />

              </div>

              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}

            </div>

            {/* Button */}

            <button
              type="submit"
              disabled={loading}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A1F44] py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#132D61] hover:shadow-2xl"
            >
              {loading ? "Creating Account..." : "Create Account"}

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </form>

          {/* Bottom */}

          <div className="mt-8 text-center">

            <p className="text-gray-600">

              Already have an account?

              <a
                href="/login"
                className="ml-2 font-semibold text-[#0A1F44] hover:text-[#D4AF6A]"
              >
                Sign In
              </a>

            </p>

            <p className="mt-5 text-xs leading-6 text-gray-400">

              By creating an account, you agree to our

              <span className="text-[#D4AF6A] cursor-pointer">
                {" "}
                Terms of Service
              </span>

              {" "}and{" "}

              <span className="text-[#D4AF6A] cursor-pointer">
                Privacy Policy
              </span>

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Register;