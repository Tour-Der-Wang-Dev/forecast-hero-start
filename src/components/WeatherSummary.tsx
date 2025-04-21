
import { motion } from "framer-motion";
import { format } from "date-fns";

interface WeatherSummaryProps {
  temp: number;
  condition: string;
  lastUpdate: Date;
  icon: string;
}

const WeatherSummary = ({ temp, condition, lastUpdate, icon }: WeatherSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm mx-auto text-center"
    >
      <div className="space-y-4">
        <div className="text-6xl font-bold text-gray-900">
          {temp}°
        </div>
        
        <div className="flex items-center justify-center gap-2 text-xl text-gray-700">
          <span className="text-2xl">{icon}</span>
          <span>{condition}</span>
        </div>

        <div className="text-sm text-gray-500">
          Last updated: {format(lastUpdate, "h:mm a")}
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherSummary;
