
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LogoProps {
  size: {
    width: number;
    height: number;
  };
}

const Logo = ({ size }: LogoProps) => {
  return (
    <div 
      className="transition-transform duration-300 hover:scale-105"
      style={{ width: size.width, height: size.height }}
    >
      <AspectRatio ratio={size.width / size.height}>
        <img
          src="/logo-removebg-preview.png"
          alt="Logo"
          className="object-contain w-full h-full"
        />
      </AspectRatio>
    </div>
  );
};

export default Logo;
