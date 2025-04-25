import React from "react";
import { CircleDot, Circle } from "lucide-react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center space-x-1">
        <CircleDot size={24} className="text-emerald-400" />
        <Circle size={24} className="text-emerald-400" />
      </div>
      <div className="ml-2">
        <span className="text-white font-bold text-xl tracking-wide">
          Sparring
        </span>
        <span className="text-emerald-400 font-bold text-xl tracking-wide">
          Player
        </span>
      </div>
    </div>
  );
};

export default Logo;
