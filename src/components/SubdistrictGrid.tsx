
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
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {districts.map((district, index) => (
        <motion.div
          key={district.name}
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={district.onClick}
          className={cn(
            "bg-white rounded-lg p-4 shadow-sm hover:shadow-md",
            "cursor-pointer transition-shadow duration-200"
          )}
        >
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900">{district.name}</h3>
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">{district.icon}</span>
              <span className="text-3xl font-bold text-gray-900">
                {district.cur}°
              </span>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500">
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
