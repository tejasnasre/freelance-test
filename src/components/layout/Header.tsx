import React, { useState } from "react";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-emerald-500 text-white text-center py-2 text-sm">
        <p>
          Premium Tennis & Badminton Equipment - Free Shipping on Orders Over
          $100
        </p>
      </div>

      {/* Main navigation */}
      <nav className="bg-slate-900 text-white px-4 py-4 lg:px-8 border-b border-slate-800">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="#" isActive>
              TENNIS
            </NavLink>
            <NavLink href="#">BADMINTON</NavLink>
            <NavLink href="#">RACKETS</NavLink>
            <NavLink href="#">APPAREL</NavLink>
            <NavLink href="#">ACCESSORIES</NavLink>
            <NavLink href="#">COURT SHOES</NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-emerald-400 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-white hover:text-emerald-400 transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-white hover:text-emerald-400 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="ml-2 lg:hidden text-white hover:text-emerald-400 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
};

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
        isActive ? "text-emerald-400" : "text-white"
      }`}
    >
      {children}
    </a>
  );
};

export default Header;
