import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

export interface CaseItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: "common" | "uncommon" | "rare" | "mythical" | "legendary" | "ancient";
}

export interface CaseProps {
  id: string;
  name: string;
  image: string;
  price: number;
  items: CaseItem[];
  className?: string;
}

const rarityColors = {
  common: "border-gray-400 bg-gray-500/10",
  uncommon: "border-blue-400 bg-blue-500/10",
  rare: "border-purple-400 bg-purple-500/10",
  mythical: "border-pink-400 bg-pink-500/10",
  legendary: "border-yellow-400 bg-yellow-500/10", 
  ancient: "border-red-400 bg-red-500/10",
};

const rarityGlows = {
  common: "",
  uncommon: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  rare: "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
  mythical: "shadow-[0_0_15px_rgba(217,70,239,0.5)]",
  legendary: "shadow-[0_0_15px_rgba(250,204,21,0.5)]",
  ancient: "shadow-[0_0_15px_rgba(234,56,76,0.5)]",
};

const CaseCard: React.FC<CaseProps> = ({
  id,
  name,
  image,
  price,
  items,
  className,
}) => {
  // Find the highest rarity item in the case
  const highestRarity = 
    items.reduce((highest, item) => {
      const rarityOrder = ["common", "uncommon", "rare", "mythical", "legendary", "ancient"];
      const currentIndex = rarityOrder.indexOf(item.rarity);
      const highestIndex = rarityOrder.indexOf(highest);
      return currentIndex > highestIndex ? item.rarity : highest;
    }, "common" as CaseItem["rarity"]);

  return (
    <div 
      className={cn(
        "group relative flex flex-col items-center p-4 rounded-lg border border-cs-gray/30 bg-card transition-all duration-300 hover:border-cs-purple/50 hover:translate-y-[-5px]",
        className
      )}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-cs-purple/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div 
        className={cn(
          "relative w-36 h-36 mb-3 flex items-center justify-center rounded-lg p-2 border border-cs-gray/20 overflow-hidden",
          rarityColors[highestRarity],
          rarityGlows[highestRarity]
        )}
      >
        <div className="absolute inset-0 bg-cs-dark/70"></div>
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="relative w-28 h-28 object-contain animate-float"
        />
        
        <div className="absolute -bottom-2 left-0 right-0 h-7 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <span className="text-xs font-medium text-gray-300">
            <Box className="inline mr-1 w-3 h-3" /> {items.length} предметов
          </span>
        </div>
      </div>
      
      <h3 className="text-sm font-bold truncate w-full text-center mb-1">{name}</h3>
      
      <div className="mt-auto pt-3 w-full">
        <Button 
          className="w-full bg-cs-purple hover:bg-cs-purple/90 text-white"
          size="sm"
        >
          {price.toFixed(2)} ₽
        </Button>
      </div>
    </div>
  );
};

export default CaseCard;
