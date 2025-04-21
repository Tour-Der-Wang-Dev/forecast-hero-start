
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const HeroSection = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="relative min-h-[85vh] overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/669c79b1-4326-4387-bec9-8a0387653364.png')", 
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-left pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Your Weather Forecast Adventure
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Get accurate weather forecasts for any location. Plan your outdoor adventures with confidence.
          </p>
          
          {/* Search box */}
          <div className="flex w-full max-w-md gap-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Enter location..." 
                className="pl-10 bg-white/90 border-0 focus:ring-2 focus:ring-blue-500 text-gray-800 h-12"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button 
              className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
              onClick={() => console.log("Searching for:", location)}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-2">Real-time Updates</h3>
              <p className="text-white/80 text-sm">Get the latest weather data as it happens</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-2">7-Day Forecast</h3>
              <p className="text-white/80 text-sm">Plan your week with extended forecasts</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <h3 className="text-white font-bold text-lg mb-2">Accurate Data</h3>
              <p className="text-white/80 text-sm">Powered by reliable weather sources</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
