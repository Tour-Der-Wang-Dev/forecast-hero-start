import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/MainLayout";
import WeatherSummary from "@/components/WeatherSummary";
import SubdistrictGrid from "@/components/SubdistrictGrid";
import FloatingSubdistrictSelector from "@/components/FloatingSubdistrictSelector";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import HeroSection from "@/components/HeroSection";

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

  const layoutProps = {
    logo: {
      src: "/logo-removebg-preview.png",
      alt: "Wang Sam Mo Weather"
    },
    navigationLinks: [
      { text: "Home", href: "/" },
      { text: "Weather Map", href: "/weather-map" },
      { text: "Forecast", href: "/forecast" },
    ],
    footerInfo: {
      contact: "Email: contact@wangsammo-weather.th | Phone: +66 123 456 789",
      copyright: `© ${new Date().getFullYear()} Wang Sam Mo Weather. All rights reserved.`
    }
  };

  return (
    <MainLayout {...layoutProps}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto py-4 px-4"
        >
          <WeatherSummary
            temp={28}
            condition="Sunny"
            lastUpdate={new Date()}
            icon="☀️"
          />
        </motion.div>

        <div className="relative w-full h-[400px] overflow-hidden">
          <AspectRatio ratio={16/9} className="w-full">
            <img
              src="/lovable-uploads/image (15).jpg"
              alt="Wang Sam Mo Weather Overview"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-blue-900/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <HeroSection
              title="Wang Sam Mo Weather"
              subtitle="Real-time weather across all subdistricts"
              bgImage="/lovable-uploads/image (15).jpg"
            />
          </div>
        </div>
        
        <div className="container mx-auto py-8 px-4 space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
              Subdistrict Weather
            </h2>
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
    </MainLayout>
  );
};

export default Index;
