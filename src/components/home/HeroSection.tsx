import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-poppins">
            Elevate Your Game with{" "}
            <span className="text-emerald-400">SparringPlayer</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl font-inter">
            Discover premium tennis and badminton equipment designed for
            champions. From professional rackets to performance gear, we've got
            everything you need to dominate the court.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/players">
              <Button
                variant="primary"
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 transition-colors"
              >
                Find Players
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10"
            >
              Shop Equipment
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Images Grid */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full hidden lg:grid grid-cols-2 gap-4 p-8">
        <div className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform">
          <img
            src="https://images.pexels.com/photos/6292460/pexels-photo-6292460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Tennis Player"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded">
              Tennis
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-transform mt-8">
          <img
            src="https://images.pexels.com/photos/4061435/pexels-photo-4061435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Badminton Player"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded">
              Badminton
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Hero Image */}
      <div className="lg:hidden mt-8">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img
            src="https://images.pexels.com/photos/5739074/pexels-photo-5739074.jpeg"
            alt="Tennis Player"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-emerald-500 text-white text-xs font-medium px-2 py-1 rounded">
              Tennis
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default HeroSection;
