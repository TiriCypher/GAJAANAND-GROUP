function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
      bg-[#0A1F44]
      hover:bg-[#16356D]
      text-white
      px-7
      py-3
      rounded-lg
      transition-all
      duration-300
      font-medium
      ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;