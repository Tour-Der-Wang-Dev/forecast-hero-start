import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import WeatherSummary from "@/components/WeatherSummary";
import SubdistrictGrid from "@/components/SubdistrictGrid";
import FloatingSubdistrictSelector from "@/components/FloatingSubdistrictSelector";

const Index = () => {
  const subdistricts = [
    "เทศบาลตำบลวังสามหมอ",
    "เทศบาลตำบลลำพันชาด",
    "เทศบาลตำบลผาสุก",
    "เทศบาลตำบลหนองหญ้าไซ",
    "เทศบาลตำบลบะยาว",
    "อบต.หนองกุงทับม้า",
    "อบต.คำโคกสูง"
  ];

  const [selectedSubdistrict, setSelectedSubdistrict] = useState("All");

  const districts = [
    { name: "Downtown", cur: 23, min: 18, max: 25, icon: "⛅", onClick: () => console.log("Downtown clicked") },
    { name: "Riverside", cur: 24, min: 19, max: 26, icon: "☀️", onClick: () => console.log("Riverside clicked") },
    { name: "Hillside", cur: 21, min: 16, max: 23, icon: "🌥️", onClick: () => console.log("Hillside clicked") },
    { name: "Bayside", cur: 22, min: 17, max: 24, icon: "🌤️", onClick: () => console.log("Bayside clicked") },
  ];

  const filteredDistricts = selectedSubdistrict === "All" 
    ? districts 
    : districts.filter(d => d.name === selectedSubdistrict);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection
        title="Your Weather Forecast Adventure"
        subtitle="Get accurate weather forecasts for any location. Plan your outdoor adventures with confidence."
        bgImage="/lovable-uploads/image (15).jpg"
      />
      <div className="container mx-auto py-16 px-4 space-y-16">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Current Weather</h2>
          <WeatherSummary
            temp={23}
            condition="Partly Cloudy"
            lastUpdate={new Date()}
            icon="⛅"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">District Weather</h2>
          <SubdistrictGrid districts={filteredDistricts} />
        </div>
      </div>

      <FloatingSubdistrictSelector
        options={subdistricts}
        selected={selectedSubdistrict}
        onSelect={setSelectedSubdistrict}
      />
    </div>
  );
};

export default Index;
