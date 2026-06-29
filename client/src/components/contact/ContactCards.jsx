import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

function ContactCards() {
  const data = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@gajaanandgroup.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Surat, Gujarat",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "9 AM - 7 PM",
    },
  ];

  return (
    <section className="-mt-32 relative z-20">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                backdrop-blur-xl
                bg-white/90
                rounded-[32px]
                p-8
                shadow-2xl
                border
                border-white
                hover:-translate-y-4
                transition
                duration-500
                "
              >
                <div className="
                  h-16
                  w-16
                  rounded-2xl
                  bg-[#D4AF6A]
                  flex
                  items-center
                  justify-center
                ">
                  <Icon
                    size={30}
                    className="text-[#071B3B]"
                  />
                </div>

                <h3 className="
                  mt-6
                  text-xl
                  font-bold
                  text-[#071B3B]
                ">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-500">
                  {item.value}
                </p>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}

export default ContactCards;