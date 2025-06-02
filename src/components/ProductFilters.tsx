import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Все игрушки", emoji: "🎯" },
  { id: "bears", name: "Мишки", emoji: "🧸" },
  { id: "cats", name: "Котики", emoji: "🐱" },
  { id: "dogs", name: "Собачки", emoji: "🐶" },
  { id: "unicorns", name: "Единороги", emoji: "🦄" },
];

const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Категории</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className="flex items-center space-x-2"
          >
            <span>{category.emoji}</span>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductFilters;
