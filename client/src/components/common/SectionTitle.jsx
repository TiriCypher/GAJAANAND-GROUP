function SectionTitle({
  subtitle,
  title,
}) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[5px] text-[#D4AF6A] font-semibold">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-[#0A1F44] mt-3">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;