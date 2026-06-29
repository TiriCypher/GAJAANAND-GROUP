import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Building2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../services/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    isAuthenticated,
    user,
  } = useSelector(
    (state) => state.auth
  );

  if (isAuthenticated) {
    if (
      user?.role === "admin" ||
      user?.role === "super_admin"
    ) {
      return <Navigate to="/admin" replace />;
    }

    return <Navigate to="/profile" replace />;
  }

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await login(data);

      console.log("FULL RESPONSE", response);
      console.log("DATA", response.data);

      dispatch(
        loginSuccess({
          user: response.data.user,
          accessToken:
            response.data.accessToken,
        })
      );

      toast.success("Login successful");

      const role = response.data.user.role;

      if (
        role === "admin" ||
        role === "super_admin"
      ) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-5 py-16">

      {/* Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#D4AF6A]/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0A1F44]/10 blur-3xl"></div>

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
              Welcome Back
            </h1>

            <p className="mt-3 text-sm tracking-[4px] uppercase text-[#D4AF6A]">
              SIGN IN TO YOUR ACCOUNT
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-5"
          >

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                />

                <input
                  {...register("email", {
                    required: "Email required",
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20 outline-none"
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
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF6A]"
                />

                <input
                  {...register("password", {
                    required: "Password required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-12 focus:border-[#D4AF6A] focus:ring-4 focus:ring-[#D4AF6A]/20 outline-none"
                />

                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="text-[#D4AF6A] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A1F44] py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#132D61] hover:shadow-2xl"
            >
              {loading ? "Signing In..." : "Sign In"}

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Bottom */}
          <div className="mt-8 text-center">

            <p className="text-gray-600">
              Don't have an account?

              <Link
                to="/register"
                className="ml-2 font-semibold text-[#0A1F44] hover:text-[#D4AF6A]"
              >
                Create Account
              </Link>
            </p>

            <p className="mt-5 text-xs text-gray-400">
              BUILDING TRUST. CREATING VALUE.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Login;