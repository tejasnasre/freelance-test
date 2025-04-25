import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-dark-teal text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Redefining Athletic Performance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Image */}
          <div className="order-2 md:order-1 md:col-span-1">
            <img
              src="https://images.pexels.com/photos/4753996/pexels-photo-4753996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Athletic Performance"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Features List */}
          <div className="order-1 md:order-2 md:col-span-2 space-y-6">
            <FeatureItem
              title="Unmatched Comfort"
              description="Experience the perfect blend of cushion and flexibility with our responsive midsole technology."
            />
            <FeatureItem
              title="Superior Design"
              description="Stand out with our sleek, futuristic shoe designs that make a statement on and off the field."
            />
            <FeatureItem
              title="Durability and Quality"
              description="Crafted from high-quality materials, our shoes are designed to provide long-lasting support, even over the long haul."
            />
            <a
              href="#"
              className="inline-block text-green-400 hover:text-green-300 font-medium mt-4"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

type FeatureItemProps = {
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-teal-300">{title}</h3>
      <p className="mt-2 text-teal-100">{description}</p>
    </div>
  );
};

export default FeaturesSection;
