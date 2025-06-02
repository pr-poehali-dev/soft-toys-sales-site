import { Button } from "@/components/ui/button";

interface ProductFiltersProps {
  selectedVariety: string;
  onVarietyChange: (variety: string) => void;
}

const varieties = [
  { id: "all", name: "Все сорта", emoji: "🍒" },
  { id: "сладкая", name: "Сладкая", emoji: "🍭" },
  { id: "кислая", name: "Кислая", emoji: "🍋" },
  { id: "кисло-сладкая", name: "Кисло-сладкая", emoji: "🌈" },
];

const ProductFilters = ({
  selectedVariety,
  onVarietyChange,
}: ProductFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Сорта вишни</h3>
      <div className="flex flex-wrap gap-2">
        {varieties.map((variety) => (
          <Button
            key={variety.id}
            variant={selectedVariety === variety.id ? "default" : "outline"}
            onClick={() => onVarietyChange(variety.id)}
            className="flex items-center space-x-2"
          >
            <span>{variety.emoji}</span>
            <span>{variety.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
