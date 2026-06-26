import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../services/property.service";
import PropertyCard from "../property/PropertyCard";

function FeaturedProperties() {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });

  if (isLoading) {
    return (
      <section className="py-20 text-center">
        Loading properties...
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-20 text-center text-red-600">
        Failed to load properties.
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#0A1F44] mb-12">
          Featured Properties
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.data.properties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;