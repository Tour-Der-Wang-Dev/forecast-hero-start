
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface FloatingSubdistrictSelectorProps {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
}

const FloatingSubdistrictSelector = ({
  options,
  selected,
  onSelect,
}: FloatingSubdistrictSelectorProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 flex gap-2 overflow-x-auto max-w-[90vw] scrollbar-hide">
        <Button
          variant={selected === "All" ? "default" : "ghost"}
          className="rounded-full whitespace-nowrap bg-blue-200 text-blue-900 hover:bg-blue-300 hover:text-blue-900"
          onClick={() => onSelect("All")}
        >
          All
        </Button>
        {options.map((option) => (
          <Button
            key={option}
            variant={selected === option ? "default" : "ghost"}
            className={cn(
              "rounded-full whitespace-nowrap", 
              selected === option 
                ? "bg-blue-200 text-blue-900 hover:bg-blue-300" 
                : "text-blue-800 hover:bg-blue-100"
            )}
            onClick={() => onSelect(option)}
          >
            {option}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingSubdistrictSelector;
