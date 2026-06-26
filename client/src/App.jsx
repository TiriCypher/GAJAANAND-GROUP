import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import Loader from "./components/common/Loader";
import SmoothScroll from "./components/common/SmoothScroll";
import ScrollProgress from "./components/common/ScrollProgress";
import BackToTop from "./components/common/BackToTop";

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () =>
      clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />
      <SmoothScroll />
      <BackToTop />
      <Home />
    </>
  );
}

export default App;