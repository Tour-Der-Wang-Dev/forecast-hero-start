
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface ImageContainerProps {
  image: string;
}

const ImageContainer = ({ image }: ImageContainerProps) => {
  return (
    <div className="w-full overflow-hidden bg-white dark:bg-gray-900 rounded-lg shadow-lg transition-colors duration-200">
      <AspectRatio ratio={16/9} className="w-full">
        <img
          src={image}
          alt="Featured content"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </AspectRatio>
      <div className="p-4">
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ImageContainer;
