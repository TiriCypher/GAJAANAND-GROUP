import {
    Pencil,
    Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

function PropertyTable({
    properties,
    onDelete,
}) {
    return (
        <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="hidden lg:block">

                <table className="w-full">

                    <thead className="bg-[#071B3B] text-white">

                        <tr>
                            <th className="p-5">
                                Property
                            </th>

                            <th>Price</th>

                            <th>Location</th>

                            <th>Status</th>

                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {properties.map(
                            property => (
                                <tr
                                    key={property._id}
                                    className="border-b"
                                >
                                    <td className="p-5">
                                        {property.title}
                                    </td>

                                    <td>
                                        ₹
                                        {property.price}
                                    </td>

                                    <td>
                                        <div>
                                            <p className="font-medium">
                                                {property.location?.city}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {property.location?.state},
                                                {" "}
                                                {property.location?.country}
                                            </p>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                                            Active
                                        </span>
                                    </td>

                                    <td className="flex gap-4 py-5">
                                        <Link
                                            to={`/admin/properties/edit/${property._id}`}
                                        >
                                            <Pencil className="text-blue-500 hover:scale-110 transition" />
                                        </Link>

                                        <button
                                            onClick={() => {
                                                if (
                                                    window.confirm(
                                                        "Delete this property?"
                                                    )
                                                ) {
                                                    onDelete(property._id);
                                                }
                                            }}
                                        >
                                            <Trash2 className="text-red-500 hover:scale-110 transition" />
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}

                    </tbody>

                </table>
            </div>

            <div className="lg:hidden p-4 space-y-4">

                {properties.map((property) => (

                    <div
                        key={property._id}
                        className="
      rounded-2xl
      border
      p-4
      shadow-sm
      "
                    >

                        <h3 className="font-bold text-lg">
                            {property.title}
                        </h3>

                        <p className="text-[#D4AF6A] font-semibold mt-2">
                            ₹{property.price}
                        </p>

                        <p className="text-gray-500 mt-2">
                            {property.location?.city}
                        </p>

                        <div className="flex gap-3 mt-4">

                            <Link
                                to={`/admin/properties/edit/${property._id}`}
                                className="
          flex-1
          bg-blue-500
          text-white
          py-2
          rounded-xl
          text-center
          "
                            >
                                Edit
                            </Link>

                            <button
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            "Delete this property?"
                                        )
                                    ) {
                                        onDelete(property._id);
                                    }
                                }}
                                className="
          flex-1
          bg-red-500
          text-white
          py-2
          rounded-xl
          "
                            >
                                Delete
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default PropertyTable;