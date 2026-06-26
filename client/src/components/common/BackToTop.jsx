import { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener(
      "scroll",
      toggle
    );

    return () =>
      window.removeEventListener(
        "scroll",
        toggle
      );
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`
        fixed
        bottom-6
        right-6
        z-50
        bg-[#0A1F44]
        text-white
        w-12
        h-12
        rounded-full
        shadow-lg
        transition-all
        ${
          visible
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
      `}
    >
      ↑
    </button>
  );
}

export default BackToTop;