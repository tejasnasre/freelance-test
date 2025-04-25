import React from "react";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "PLAYERS", path: "/players" },
    { name: "TENNIS", path: "#" },
    { name: "BADMINTON", path: "#" },
    { name: "RACKETS", path: "#" },
    { name: "APPAREL", path: "#" },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-slate-900 text-white">
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="text-white hover:text-emerald-400"
          >
            Close
          </button>
        </div>

        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block py-2 text-xl font-medium hover:text-emerald-400 transition-colors"
                onClick={onClose}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6 border-t border-slate-700">
          <Link
            to="#"
            className="block py-2 text-sm hover:text-emerald-400 transition-colors"
            onClick={onClose}
          >
            Sign In / Register
          </Link>
          <Link
            to="#"
            className="block py-2 text-sm hover:text-emerald-400 transition-colors"
            onClick={onClose}
          >
            Store Locator
          </Link>
          <Link
            to="#"
            className="block py-2 text-sm hover:text-emerald-400 transition-colors"
            onClick={onClose}
          >
            Customer Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
