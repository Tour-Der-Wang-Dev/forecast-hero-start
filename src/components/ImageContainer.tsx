
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ImageContainerProps {
  image: string;
}

const ImageContainer = ({ image }: ImageContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mb-8"
    >
      <Card className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-xl transition-all duration-300">
        <AspectRatio ratio={16/9} className="w-full">
          <img
            src={image}
            alt="วังสามหมอ สภาพอากาศ"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </AspectRatio>
        <CardContent className="p-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            กลับไปหน้าหลัก
          </Link>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            อัพเดทล่าสุด: วันนี้
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ImageContainer;
