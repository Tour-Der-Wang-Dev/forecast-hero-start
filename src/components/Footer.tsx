
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="bg-blue-900/10 backdrop-blur-sm pt-8 pb-16 mt-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-900">Wang Sam Mo Weather Forecast</h3>
            <p className="text-blue-700">
              Accurate and real-time weather data across all subdistricts in Wang Sam Mo, Udon Thani.
            </p>
            <p className="text-sm text-blue-600">
              Data from OpenWeatherMap & AccuWeather
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="bg-white/80 rounded-2xl shadow-md p-3 w-full max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-blue-700" />
                <span className="text-sm font-medium text-blue-800">Wang Sam Mo, Udon Thani</span>
              </div>
              <div className="aspect-video bg-blue-100/50 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123769.17853337266!2d103.4017689787297!3d16.699652900000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x312698b5d028be7d%3A0x9841a5f48909112!2sWang%20Sam%20Mo%2C%20Udon%20Thani!5e0!3m2!1sen!2sth!4v1713813993795!5m2!1sen!2sth" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wang Sam Mo Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-200 mt-8 pt-4">
          <p className="text-center text-xs text-blue-600">
            © {new Date().getFullYear()} Wang Sam Mo Weather Forecast • All data updated every hour
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
