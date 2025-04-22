
import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import WeatherSummary from "@/components/WeatherSummary";
import SubdistrictGrid from "@/components/SubdistrictGrid";
import FloatingSubdistrictSelector from "@/components/FloatingSubdistrictSelector";
import Footer from "@/components/Footer";

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
    { name: "เทศบาลตำบลวังสามหมอ", cur: 28, min: 23, max: 32, icon: "☀️", onClick: () => console.log("วังสามหมอ clicked") },
    { name: "เทศบาลตำบลลำพันชาด", cur: 27, min: 22, max: 31, icon: "⛅", onClick: () => console.log("ลำพันชาด clicked") },
    { name: "เทศบาลตำบลผาสุก", cur: 29, min: 24, max: 33, icon: "🌤️", onClick: () => console.log("ผาสุก clicked") },
    { name: "เทศบาลตำบลหนองหญ้าไซ", cur: 26, min: 22, max: 30, icon: "⛅", onClick: () => console.log("หนองหญ้าไซ clicked") },
    { name: "เทศบาลตำบลบะยาว", cur: 28, min: 23, max: 31, icon: "☀️", onClick: () => console.log("บะยาว clicked") },
    { name: "อบต.หนองกุงทับม้า", cur: 27, min: 22, max: 32, icon: "🌤️", onClick: () => console.log("หนองกุงทับม้า clicked") },
    { name: "อบต.คำโคกสูง", cur: 28, min: 23, max: 33, icon: "☀️", onClick: () => console.log("คำโคกสูง clicked") },
  ];

  const filteredDistricts = selectedSubdistrict === "All" 
    ? districts 
    : districts.filter(d => d.name === selectedSubdistrict);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <HeroSection
        title="Wang Sam Mo Weather"
        subtitle="Real-time weather across all subdistricts"
        bgImage="/lovable-uploads/image (15).jpg"
      />
      
      <div className="container mx-auto py-8 px-4 space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Current Weather</h2>
          <WeatherSummary
            temp={28}
            condition="Sunny"
            lastUpdate={new Date()}
            icon="☀️"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Subdistrict Weather</h2>
          <SubdistrictGrid districts={filteredDistricts} />
        </motion.div>
      </div>

      <FloatingSubdistrictSelector
        options={subdistricts}
        selected={selectedSubdistrict}
        onSelect={setSelectedSubdistrict}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
