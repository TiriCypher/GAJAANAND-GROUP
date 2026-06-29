function StatsSection() {
  const stats = [
    { number: "500+", title: "Happy Families" },
    { number: "150+", title: "Properties Sold" },
    { number: "12+", title: "Years Experience" },
    { number: "20+", title: "Cities Covered" },
  ];

  return (
    <section className="py-28 bg-[#071B3B]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (

            <div
              key={item.title}
              className="
              rounded-[32px]
              p-10
              bg-white/10
              backdrop-blur-xl
              border border-white/10
              text-center
              hover:-translate-y-2
              transition
              "
            >
              <h2 className="
              text-6xl
              font-black
              text-[#D4AF6A]
              ">
                {item.number}
              </h2>

              <p className="mt-5 text-gray-300 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;