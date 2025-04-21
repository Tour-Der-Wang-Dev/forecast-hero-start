
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = ({ title, subtitle, bgImage }: HeroSectionProps) => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-100/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4">
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl font-bold text-gray-900 mb-6 text-center"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-2xl text-gray-800 text-center max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
