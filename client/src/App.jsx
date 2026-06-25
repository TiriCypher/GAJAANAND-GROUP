import { useEffect, useState } from "react";

import Home from "./pages/Home/Home";
import Loader from "./components/common/Loader";

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

  return <Home />;
}

export default App;