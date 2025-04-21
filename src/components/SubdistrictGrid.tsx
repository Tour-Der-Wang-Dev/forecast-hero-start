
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SubdistrictProps {
  name: string;
  cur: number;
  min: number;
  max: number;
  icon: string;
  onClick: () => void;
}

interface SubdistrictGridProps {
  districts: SubdistrictProps[];
}

const SubdistrictGrid = ({ districts }: SubdistrictGridProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      {districts.map((district, index) => (
        <motion.div
          key={district.name}
          variants={item}
          whileHover={{ scale: 1.03, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={district.onClick}
          className={cn(
            "bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg",
            "cursor-pointer transition-all duration-200"
          )}
        >
          <div className="space-y-3">
            <h3 className="font-medium text-blue-900 text-lg">{district.name}</h3>
            
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">{district.icon}</span>
              <span className="text-4xl font-bold text-blue-800">
                {district.cur}°
              </span>
            </div>
            
            <div className="flex justify-between text-sm text-blue-600 mt-2">
              <span>L: {district.min}°</span>
              <span>H: {district.max}°</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SubdistrictGrid;
