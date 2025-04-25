import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategorySectionProps = {
  title: string;
  categories: CategoryItemProps[];
};

const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  categories,
}) => {
  return (
    <div className="py-12 bg-dark-teal text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>

          <div className="flex space-x-2">
            <button className="p-1 rounded-full bg-teal-800 hover:bg-teal-700 transition">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 rounded-full bg-teal-800 hover:bg-teal-700 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              image={category.image}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type CategoryItemProps = {
  image: string;
  title: string;
  description: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-teal to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-xl font-bold text-white mb-1">Keni {title}</h3>
        <p className="text-sm text-teal-100 mb-4">{description}</p>
        <a
          href="#"
          className="inline-block text-green-400 hover:text-green-300 text-sm font-medium"
        >
          Shop
        </a>
      </div>
    </div>
  );
};

export default CategorySection;
