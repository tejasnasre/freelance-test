import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

type ProductSectionProps = {
  title: string;
  products: ProductItemProps[];
};

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <div className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold font-poppins">{title}</h2>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductItem
              key={index}
              image={product.image}
              title={product.title}
              description={product.description}
              ctaText={product.ctaText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type ProductItemProps = {
  image: string;
  title: string;
  description: string;
  ctaText: string;
};

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  title,
  description,
  ctaText,
}) => {
  return (
    <div className="group bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4">
          <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded-full">
            {title.includes("Tennis") ? "Tennis" : "Badminton"}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-emerald-400 font-poppins">
          {title}
        </h3>
        <p className="text-slate-300 mb-4 line-clamp-2 font-inter">
          {description}
        </p>
        <Button
          variant="primary"
          className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
