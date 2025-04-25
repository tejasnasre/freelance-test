import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "16/9",
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`image-container ${className}`} style={{ aspectRatio }}>
      {isLoading && <LoadingSpinner size="sm" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          isLoading ? "hidden" : "block"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ResponsiveImage;
