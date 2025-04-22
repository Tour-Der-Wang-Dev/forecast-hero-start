
import { useState } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/components/MainLayout";
import WeatherSummary from "@/components/WeatherSummary";
import SubdistrictGrid from "@/components/SubdistrictGrid";
import FloatingSubdistrictSelector from "@/components/FloatingSubdistrictSelector";
import ImageContainer from "@/components/ImageContainer";
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
      { text: "หน้าหลัก", href: "/" },
      { text: "แผนที่สภาพอากาศ", href: "/weather-map" },
      { text: "พยากรณ์", href: "/forecast" },
    ],
    footerInfo: {
      contact: "อีเมล: contact@wangsammo-weather.th | โทร: +66 123 456 789",
      copyright: `© ${new Date().getFullYear()} Wang Sam Mo Weather. สงวนลิขสิทธิ์`
    }
  };

  return (
    <MainLayout {...layoutProps}>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 font-sans">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto py-4 px-4"
        >
          <div className="mb-6">
            <HeroSection
              title="วังสามหมอ สภาพอากาศ"
              subtitle="ข้อมูลสภาพอากาศแบบเรียลไทม์สำหรับทุกตำบลในอำเภอวังสามหมอ"
              bgImage="/lovable-uploads/image (19).jpg"
            />
          </div>
          
          <WeatherSummary
            temp={28}
            condition="แดดจัด"
            lastUpdate={new Date()}
            icon="☀️"
          />
          
          <ImageContainer image="/lovable-uploads/image (15).jpg" />
        </motion.div>

        <div className="container mx-auto py-8 px-4 space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 dark:text-blue-400">
              สภาพอากาศตำบล
            </h2>
            <SubdistrictGrid districts={filteredDistricts} />
          </motion.div>
        </div>

        <FloatingSubdistrictSelector
          options={subdistricts}
          selected={selectedSubdistrict}
          onSelect={setSelectedSubdistrict}
        />
      </div>
    </MainLayout>
  );
};

export default Index;
