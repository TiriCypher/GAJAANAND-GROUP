import { useEffect, useState } from "react";

import Loader from "./components/common/Loader";
import SmoothScroll from "./components/common/SmoothScroll";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <BackToTop />
      <AppRoutes />
    </>
  );
}

export default App;