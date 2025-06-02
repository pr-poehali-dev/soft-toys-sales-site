import { Button } from "@/components/ui/button";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Все игрушки", emoji: "🧸" },
  { id: "мишки", name: "Мишки", emoji: "🐻" },
  { id: "зайчики", name: "Зайчики", emoji: "🐰" },
  { id: "котики", name: "Котики", emoji: "🐱" },
  { id: "собачки", name: "Собачки", emoji: "🐶" },
  { id: "слоники", name: "Слоники", emoji: "🐘" },
];

const ProductFilters = ({
  selectedCategory,
  onCategoryChange,
}: ProductFiltersProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h3 className="text-lg font-semibold mb-4 text-pink-800">
        Категории игрушек
      </h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 ${
              selectedCategory === category.id
                ? "bg-pink-500 hover:bg-pink-600"
                : "border-pink-200 text-pink-600 hover:bg-pink-50"
            }`}
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
