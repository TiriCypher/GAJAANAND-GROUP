import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getPropertyById,
  getProperties,
} from "../../services/property.service";
import MainLayout from "../../layouts/MainLayout";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaPhone,
  FaHeart,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaWifi,
  FaCar,
  FaSwimmingPool,
  FaDumbbell,
} from "react-icons/fa";
import {
  saveProperty,
  sendInquiry as sendInquiryAPI,
} from "../../services/property.service";

function PropertyDetails() {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [activeImage, setActiveImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  // EMI
  const [loan, setLoan] = useState(25000000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);

  const { data } = useQuery({
    queryKey: ["property", id],
    queryFn: () => getPropertyById(id),
  });

  const { data: similarData } = useQuery({
    queryKey: ["similar"],
    queryFn: () => getProperties(),
  });

  const property = data?.data?.data || {};
  const images = property.images || [];
  const similar = similarData?.data?.data?.slice(0, 3) || [];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // 🔥 AUTO SLIDER
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  // 🔥 EMI CALC
  const emi = (() => {
    const monthlyRate = rate / 12 / 100;
    const months = years * 12;
    const emi =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  })();

  // 🔥 HANDLERS
  const handleSave = async () => {
    try {
      const res = await saveProperty(id);
      alert(res.data.message);
    } catch (err) {
      alert("Login required");
    }
  };

  const handleInquiry = async (e) => {
    e.preventDefault();

    try {
      const res = await sendInquiryAPI({
        propertyId: id,
        ...form,
      });

      alert(res.data.message);

      setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <MainLayout>
      <div className="pt-24">

        {/* ================= HERO ================= */}
        <div className="relative h-[600px] overflow-hidden">

          <img
            src={images[activeImage]?.url || images[activeImage]}
            onClick={() => setShowGallery(true)}
            className="w-full h-full object-cover transition duration-700 hover:scale-110 cursor-pointer"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          {/* BADGES */}
          <div className="absolute top-10 left-10 flex gap-3">
            <span className="bg-[#D4AF6A] text-white px-4 py-1 rounded-full text-sm">
              Featured
            </span>
            <span className="bg-white px-4 py-1 rounded-full text-sm">
              Ready to Move
            </span>
          </div>

          {/* TEXT */}
          <div className="absolute bottom-10 left-10 text-white">
            <h1 className="text-5xl font-bold leading-tight">
              {property.title}
            </h1>

            <p className="flex items-center gap-2 mt-3 text-lg">
              <FaMapMarkerAlt />
              {property.location?.city}, {property.location?.state}
            </p>

            <p className="text-4xl text-[#D4AF6A] font-bold mt-4">
              ₹ {property.price?.toLocaleString("en-IN")}
            </p>
          </div>
        </div>

        {/* 🔥 THUMBNAILS */}
        <div className="flex gap-3 px-6 mt-4 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.url || img}
              onClick={() => setActiveImage(i)}
              className={`h-20 w-28 object-cover rounded-lg cursor-pointer transition ${activeImage === i ? "border-2 border-[#D4AF6A]" : ""
                }`}
            />
          ))}
        </div>

        {/* 🔥 FULLSCREEN */}
        {showGallery && (
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <FaTimes
              className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
              onClick={() => setShowGallery(false)}
            />

            <FaChevronLeft
              className="absolute left-6 text-white text-3xl cursor-pointer"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
            />

            <img
              src={images[activeImage]?.url || images[activeImage]}
              className="max-h-[80%] rounded-xl"
            />

            <FaChevronRight
              className="absolute right-6 text-white text-3xl cursor-pointer"
              onClick={() =>
                setActiveImage((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
            />
          </div>
        )}

        {/* ================= CONTENT ================= */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-14">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-14">

            {/* INFO */}
            <div className="flex gap-10 text-lg border-b pb-6">
              <div><FaBed /> {property.details?.bedrooms} Beds</div>
              <div><FaBath /> {property.details?.bathrooms} Baths</div>
              <div><FaRulerCombined /> {property.details?.area} sqft</div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* 🔥 AMENITIES */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div><FaWifi /> WiFi</div>
                <div><FaCar /> Parking</div>
                <div><FaSwimmingPool /> Pool</div>
                <div><FaDumbbell /> Gym</div>
              </div>
            </div>

            {/* MAP */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Location
              </h2>

              <iframe
                src={`https://maps.google.com/maps?q=${property.location?.city}&output=embed`}
                className="w-full h-[300px] rounded-xl"
              />
            </div>

            {/* EMI */}
            {/* ================= EMI ================= */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-semibold mb-6">
                EMI Calculator
              </h2>

              {/* INPUTS */}
              <div className="space-y-6">

                {/* LOAN */}
                <div>
                  <label className="text-sm text-gray-500">
                    Loan Amount
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="100000000"
                    step="500000"
                    value={loan}
                    onChange={(e) => setLoan(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="font-semibold text-lg">
                    ₹ {Number(loan).toLocaleString("en-IN")}
                  </p>
                </div>

                {/* RATE */}
                <div>
                  <label className="text-sm text-gray-500">
                    Interest Rate (%)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="font-semibold text-lg">
                    {rate} %
                  </p>
                </div>

                {/* YEARS */}
                <div>
                  <label className="text-sm text-gray-500">
                    Loan Tenure (Years)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full"
                  />
                  <p className="font-semibold text-lg">
                    {years} Years
                  </p>
                </div>

              </div>

              {/* RESULT */}
              <div className="mt-8 p-6 bg-[#0A1F44] text-white rounded-xl">
                <p className="text-sm opacity-80">
                  Monthly EMI
                </p>
                <h3 className="text-3xl font-bold text-[#D4AF6A] mt-1">
                  ₹ {emi.toLocaleString("en-IN")}
                </h3>
              </div>

              {/* BREAKDOWN */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Total Interest
                  </p>
                  <p className="font-semibold">
                    ₹ {(emi * years * 12 - loan).toLocaleString("en-IN")}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Total Payment
                  </p>
                  <p className="font-semibold">
                    ₹ {(emi * years * 12).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>
            </div>

            {/* SIMILAR */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Similar Properties
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {similar.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition"
                  >
                    <img src={item.images?.[0]?.url} className="h-44 w-full object-cover" />
                    <div className="p-4">
                      <h3>{item.title}</h3>
                      <p className="text-[#D4AF6A] font-bold">
                        ₹ {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="sticky top-28 space-y-6">

            {/* AGENT */}
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <img src="https://i.pravatar.cc/100" className="w-20 h-20 rounded-full mx-auto" />
              <h3 className="mt-3 font-bold">Rahul Sharma</h3>
              <p className="text-gray-500 text-sm">8 Years Experience</p>

              <button className="mt-4 w-full bg-[#D4AF6A] text-white py-3 rounded-lg flex justify-center gap-2">
                <FaPhone /> Call Agent
              </button>
            </div>

            {/* CONTACT */}
            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h2 className="font-bold mb-3">Send Inquiry</h2>

              <form onSubmit={handleInquiry} className="space-y-3">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                  placeholder="Name"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                  placeholder="Phone"
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                  placeholder="Email"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded"
                  placeholder="Message"
                />

                <button className="w-full bg-[#0A1F44] text-white py-3 rounded">
                  Send
                </button>
              </form>
            </div>

            {/* TRUST */}
            <div className="bg-green-50 p-5 rounded-xl text-sm space-y-2">
              <p>✔ Verified Property</p>
              <p>✔ Trusted by 500+ buyers</p>
              <p>✔ RERA Approved</p>
            </div>

            {/* SAVE */}
            <button
              onClick={handleSave}
              className="w-full border py-3 rounded-lg flex justify-center gap-2"
            >
              <FaHeart /> Save Property
            </button>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default PropertyDetails;