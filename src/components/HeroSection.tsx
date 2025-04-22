
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  bgImage: string;
  logoPath?: string;
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

const HeroSection = ({ title, subtitle, bgImage, logoPath }: HeroSectionProps) => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-100/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4">
        {logoPath && (
          <motion.img
            src={logoPath}
            alt="Logo"
            className="w-24 h-24 md:w-32 md:h-32 mb-4 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        )}
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 text-center"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-800 text-center max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
