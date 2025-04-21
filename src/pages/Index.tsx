
import HeroSection from "@/components/HeroSection";
import WeatherSummary from "@/components/WeatherSummary";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection
        title="Your Weather Forecast Adventure"
        subtitle="Get accurate weather forecasts for any location. Plan your outdoor adventures with confidence."
        bgImage="/lovable-uploads/image (15).jpg"
      />
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Current Weather</h2>
        <WeatherSummary
          temp={23}
          condition="Partly Cloudy"
          lastUpdate={new Date()}
          icon="⛅"
        />
      </div>
    </div>
  );
};

export default Index;
