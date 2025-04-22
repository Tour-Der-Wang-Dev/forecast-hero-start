import React from 'react';
import MainLayout from "@/components/MainLayout";
import MapView from "@/components/MapView";
import { motion } from "framer-motion";

const WeatherMap = () => {
  const mapData = {
    latitude: 17.4015,   // Wang Sam Mo coordinates
    longitude: 103.4851,
    zoom: 12
  };

  const linkingAttributes = [
    { id: "1", name: "เทศบาลตำบลวังสามหมอ" },
    { id: "2", name: "เทศบาลตำบลลำพันชาด" },
    { id: "3", name: "เทศบาลตำบลผาสุก" },
    { id: "4", name: "เทศบาลตำบลหนองหญ้าไซ" },
    { id: "5", name: "เทศบาลตำบลบะยาว" },
    { id: "6", name: "อบต.หนองกุงทับม้า" },
    { id: "7", name: "อบต.คำโคกสูง" }
  ];

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto py-8 px-4"
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800 dark:text-blue-400">
          แผนที่สภาพอากาศ วังสามหมอ
        </h1>
        <div className="mb-8">
          <MapView 
            mapData={mapData}
            linkingAttributes={linkingAttributes}
          />
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default WeatherMap;
