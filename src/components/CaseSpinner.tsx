import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CaseItem } from "./CaseCard";
import { cn } from "@/lib/utils";

interface CaseSpinnerProps {
  items: CaseItem[];
  onSpin: () => void;
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

const CaseSpinner: React.FC<CaseSpinnerProps> = ({
  items,
  onSpin,
  className,
}) => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<CaseItem | null>(null);

  const handleSpin = () => {
    if (spinning) return;
    
    setSpinning(true);
    onSpin();
    
    // Simulate spinning and getting a result
    setTimeout(() => {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setResult(randomItem);
      setSpinning(false);
    }, 5000);
  };

  // Double the items array to make the spinning animation more continuous
  const spinItems = [...items, ...items];

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full h-48 border-2 border-cs-purple rounded-lg mb-4 overflow-hidden bg-cs-dark">
        {/* Pointer in the middle */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-cs-pink z-10 transform -translate-x-1/2">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-cs-pink"></div>
        </div>
        
        {/* Items container */}
        <div 
          className={cn(
            "flex items-center absolute top-1/2 transform -translate-y-1/2 transition-transform duration-5000 gap-2 px-2",
            {
              "animate-case-spin": spinning,
            }
          )}
          style={{ 
            width: `${spinItems.length * 140}px`,
            transform: result ? `translateX(calc(50% - ${spinItems.indexOf(result) * 140 + 70}px))` : "translateX(0)",
            transition: spinning ? "transform 5s cubic-bezier(0.5, 0, 0.75, 1)" : "none"
          }}
        >
          {spinItems.map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              className={cn(
                "flex-shrink-0 w-32 h-32 flex items-center justify-center rounded-lg border p-2",
                rarityColors[item.rarity],
                rarityGlows[item.rarity]
              )}
            >
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img 
                  src={item.image || "/placeholder.svg"} 
                  alt={item.name} 
                  className="w-20 h-20 object-contain mb-1" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-center py-1 text-xs truncate px-1">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        onClick={handleSpin}
        disabled={spinning}
        className="w-full bg-cs-purple hover:bg-cs-purple/90 text-white disabled:opacity-50"
        size="lg"
      >
        {spinning ? "Крутим..." : "Крутить за 299 ₽"}
      </Button>
      
      {result && (
        <div className="mt-4 p-4 bg-card rounded-lg border border-cs-gray/30 text-center">
          <h3 className="text-lg font-bold mb-2">Ваш выигрыш!</h3>
          <div 
            className={cn(
              "mx-auto w-32 h-32 flex items-center justify-center rounded-lg border p-2",
              rarityColors[result.rarity],
              rarityGlows[result.rarity]
            )}
          >
            <img src={result.image || "/placeholder.svg"} alt={result.name} className="w-20 h-20 object-contain" />
          </div>
          <p className="mt-2 font-medium">{result.name}</p>
          <p className="text-sm text-muted-foreground">{result.price.toFixed(2)} ₽</p>
        </div>
      )}
    </div>
  );
};

export default CaseSpinner;
