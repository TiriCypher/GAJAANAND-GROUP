import { Link } from "react-router-dom";
import { COMPANY } from "../../utils/constants";

function Logo({ dark = false }) {
  return (
    <Link to="/" className="select-none">
      <h1
        className={`text-2xl font-bold tracking-wide transition-colors duration-300 ${
          dark ? "text-[#0A1F44]" : "text-white"
        }`}
      >
        {COMPANY.name}
      </h1>
    </Link>
  );
}

export default Logo;