
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
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-2 flex gap-2 overflow-x-auto max-w-[90vw] scrollbar-hide">
        <Button
          variant={selected === "All" ? "default" : "ghost"}
          className="rounded-full whitespace-nowrap"
          onClick={() => onSelect("All")}
        >
          All
        </Button>
        {options.map((option) => (
          <Button
            key={option}
            variant={selected === option ? "default" : "ghost"}
            className="rounded-full whitespace-nowrap"
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
