import {
    Home,
    IndianRupee,
    MapPin,
    Building2,
    BedDouble,
    Bath,
    FileText,
    Save,
    Upload,
    X,
    Image,
} from "lucide-react";

import { useForm } from "react-hook-form";
import {
    useEffect,
    useState,
} from "react";

function PropertyForm({
    onSubmit,
    defaultValues,
    loading,
}) {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();
    useEffect(() => {
        if (defaultValues && Object.keys(defaultValues).length) {
            reset(defaultValues);
        }
    }, [defaultValues]);

    const submitHandler =
        async data => {

            data.images = images;

            const success =
                await onSubmit(data);

            if (success) {
                reset();
                setImages([]);
            }
        };

    const [images, setImages] =
        useState([]);

    const handleImages = e => {
        const files = Array.from(
            e.target.files
        );

        setImages(files);
    };

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="space-y-8"
        >
            {/* BASIC */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Basic Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label className="font-semibold mb-2 block">
                            Property Title
                        </label>

                        <div className="relative">

                            <Home
                                size={20}
                                className="
                absolute
                left-4
                top-4
                text-[#D4AF6A]
              "
                            />

                            <input
                                {...register(
                                    "title"
                                )}
                                className="
                w-full
                pl-12
                p-4
                border
                rounded-2xl
                focus:ring-2
                focus:ring-[#D4AF6A]
                outline-none
                "
                                placeholder="Luxury Villa"
                            />

                        </div>
                    </div>

                    <div>
                        <label className="font-semibold mb-2 block">
                            Price
                        </label>

                        <div className="relative">

                            <IndianRupee
                                size={20}
                                className="
                absolute
                left-4
                top-4
                text-[#D4AF6A]
              "
                            />

                            <input
                                type="number"
                                {...register(
                                    "price"
                                )}
                                className="
                w-full
                pl-12
                p-4
                border
                rounded-2xl
              "
                            />

                        </div>
                    </div>

                </div>
            </div>

            {/* PROPERTY */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Property Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <label>
                            Purpose
                        </label>

                        <select
                            {...register(
                                "purpose"
                            )}
                            className="
              w-full
              mt-2
              p-4
              rounded-2xl
              border
              "
                        >
                            <option value="sale">
                                Sale
                            </option>

                            <option value="rent">
                                Rent
                            </option>

                        </select>
                    </div>

                    <div>
                        <label>
                            Type
                        </label>

                        <select
                            {...register(
                                "type"
                            )}
                            className="
              w-full
              mt-2
              p-4
              rounded-2xl
              border
              "
                        >
                            <option>
                                apartment
                            </option>

                            <option>
                                villa
                            </option>

                            <option>
                                plot
                            </option>

                            <option>
                                office
                            </option>

                            <option>
                                shop
                            </option>

                        </select>
                    </div>

                </div>

            </div>

            {/* LOCATION */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Location
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div>
                        <label>
                            Address
                        </label>

                        <input
                            {...register(
                                "location.address"
                            )}
                            className="
              w-full
              p-4
              border
              rounded-2xl
              "
                        />
                    </div>

                    <div>
                        <label>
                            City
                        </label>

                        <input
                            {...register(
                                "location.city"
                            )}
                            className="
              w-full
              p-4
              border
              rounded-2xl
              "
                        />
                    </div>

                    <div>
                        <label>
                            State
                        </label>

                        <input
                            {...register(
                                "location.state"
                            )}
                            className="
              w-full
              p-4
              border
              rounded-2xl
              "
                        />
                    </div>

                </div>

            </div>

            {/* DETAILS */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Property Details
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="relative">

                        <BedDouble
                            size={20}
                            className="
              absolute
              left-4
              top-4
              text-[#D4AF6A]
              "
                        />

                        <input
                            type="number"
                            placeholder="Bedrooms"
                            {...register(
                                "details.bedrooms"
                            )}
                            className="
              w-full
              pl-12
              p-4
              border
              rounded-2xl
              "
                        />

                    </div>

                    <div className="relative">

                        <Bath
                            size={20}
                            className="
              absolute
              left-4
              top-4
              text-[#D4AF6A]
              "
                        />

                        <input
                            type="number"
                            placeholder="Bathrooms"
                            {...register(
                                "details.bathrooms"
                            )}
                            className="
              w-full
              pl-12
              p-4
              border
              rounded-2xl
              "
                        />

                    </div>

                    <div className="relative">
                        <Building2
                            size={20}
                            className="
      absolute
      left-4
      top-4
      text-[#D4AF6A]
    "
                        />

                        <input
                            type="number"
                            placeholder="Area (sq.ft)"
                            {...register("details.area")}
                            className="
      w-full
      pl-12
      p-4
      border
      rounded-2xl
    "
                        />
                    </div>

                    <div className="relative">
                        <Home
                            size={20}
                            className="
      absolute
      left-4
      top-4
      text-[#D4AF6A]
    "
                        />

                        <input
                            type="number"
                            placeholder="Parking"
                            {...register("details.parking")}
                            className="
      w-full
      pl-12
      p-4
      border
      rounded-2xl
    "
                        />
                    </div>

                </div>

            </div>

            {/* DESCRIPTION */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Description
                </h2>

                <div className="relative">

                    <FileText
                        size={20}
                        className="
            absolute
            left-4
            top-4
            text-[#D4AF6A]
          "
                    />

                    <textarea
                        rows={6}
                        {...register(
                            "description"
                        )}
                        className="
            w-full
            pl-12
            p-4
            border
            rounded-2xl
            "
                    />

                </div>

            </div>

            {/* IMAGES */}

            <div className="bg-white rounded-3xl shadow p-8">

                <h2 className="text-2xl font-bold mb-8">
                    Property Images
                </h2>

                <label
                    className="
    border-2
    border-dashed
    border-[#D4AF6A]
    rounded-3xl
    p-10
    flex
    flex-col
    items-center
    justify-center
    cursor-pointer
    hover:bg-[#FFF9EE]
    transition
    "
                >

                    <Upload
                        size={45}
                        className="text-[#D4AF6A]"
                    />

                    <h3 className="mt-4 font-semibold">
                        Upload Property Images
                    </h3>

                    <p className="text-gray-500 text-sm">
                        JPG, PNG, WEBP
                    </p>

                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImages}
                        className="hidden"
                    />

                </label>

                {images.length > 0 && (

                    <div className="grid md:grid-cols-4 gap-4 mt-8">

                        {images.map(
                            (image, index) => (

                                <div
                                    key={index}
                                    className="
            relative
            rounded-2xl
            overflow-hidden
            shadow
            "
                                >

                                    <img
                                        src={URL.createObjectURL(
                                            image
                                        )}
                                        alt=""
                                        className="
              h-40
              w-full
              object-cover
              "
                                    />

                                </div>
                            )
                        )}

                    </div>

                )}

            </div>

            {/* BUTTON */}

            <button
                disabled={loading}
                className="
        flex
        items-center
        gap-3
        px-10
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-[#071B3B]
        to-[#123D82]
        text-white
        font-semibold
        shadow-xl
        hover:scale-105
        transition
      "
            >
                <Save size={20} />

                {loading
                    ? "Saving..."
                    : "Save Property"}
            </button>
        </form>
    );
}

export default PropertyForm;