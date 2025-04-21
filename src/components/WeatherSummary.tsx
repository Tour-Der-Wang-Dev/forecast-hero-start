
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
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto text-center"
    >
      <div className="space-y-6">
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-7xl font-bold text-blue-900"
        >
          {temp}°C
        </motion.div>
        
        <div className="flex items-center justify-center gap-3 text-2xl text-blue-800">
          <span className="text-4xl">{icon}</span>
          <span>{condition}</span>
        </div>

        <div className="text-sm text-blue-600">
          Last updated: {format(lastUpdate, "h:mm a")}
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherSummary;
