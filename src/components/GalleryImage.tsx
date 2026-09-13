import { useState } from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage = ({ src, alt }: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative group w-full h-56 md:flex-grow md:w-56 md:h-[400px] rounded-lg overflow-hidden transition-all duration-500 md:hover:w-full">
      <img
        src={src}
        alt={alt}
        className={`
          h-full w-full object-cover md:group-hover:object-contain object-center
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          transition-all duration-300
        `}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default GalleryImage;