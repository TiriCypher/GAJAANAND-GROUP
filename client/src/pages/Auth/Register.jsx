import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../features/auth/validation/registerSchema";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-[#0A1F44] text-center">
          Create Account
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Join GAJAANAND GROUP
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <input
              {...register("firstName")}
              placeholder="First Name"
              className="w-full rounded-lg border p-3"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.firstName?.message}
            </p>
          </div>

          <div>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              className="w-full rounded-lg border p-3"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.lastName?.message}
            </p>
          </div>

          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border p-3"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.email?.message}
            </p>
          </div>

          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border p-3"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.password?.message}
            </p>
          </div>

          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-lg border p-3"
            />
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#0A1F44] py-3 text-white font-semibold hover:bg-[#12336C] transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;