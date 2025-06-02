import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const mockProducts = [
  {
    id: 1,
    name: "Плюшевый мишка Тедди",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    category: "bears",
    isNew: true,
  },
  {
    id: 2,
    name: "Котёнок Мурзик",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&h=300&fit=crop",
    category: "cats",
  },
  {
    id: 3,
    name: "Единорог Радужка",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    category: "unicorns",
    isNew: true,
  },
  {
    id: 4,
    name: "Щенок Дружок",
    price: 2100,
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
    category: "dogs",
  },
  {
    id: 5,
    name: "Большой медведь Умка",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?w=400&h=300&fit=crop",
    category: "bears",
  },
  {
    id: 6,
    name: "Пушистый котик Снежок",
    price: 1900,
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&h=300&fit=crop",
    category: "cats",
  },
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? mockProducts
      : mockProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Каталог мягких игрушек
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите идеального плюшевого друга из нашей коллекции качественных
          игрушек
        </p>
      </div>

      <ProductFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">🔍</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Товары не найдены
          </h3>
          <p className="text-gray-600">Попробуйте выбрать другую категорию</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
