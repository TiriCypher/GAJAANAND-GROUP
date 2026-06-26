import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1F44] text-white px-6">
      <h1 className="text-8xl font-bold text-[#D4AF6A]">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 text-center max-w-lg text-gray-300">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-[#D4AF6A] px-6 py-3 text-[#0A1F44] font-semibold transition hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;