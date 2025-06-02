import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const mockProducts = [
  {
    id: 1,
    name: "Плюшевый мишка Тедди",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
    category: "Мишки",
    size: "30 см",
    age: "3+",
    isNew: true,
  },
  {
    id: 2,
    name: "Мягкий зайчик Бони",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?w=400&h=300&fit=crop",
    category: "Зайчики",
    size: "25 см",
    age: "1+",
  },
  {
    id: 3,
    name: "Котенок Пушистик",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    category: "Котики",
    size: "20 см",
    age: "2+",
    isNew: true,
  },
  {
    id: 4,
    name: "Большой мишка Гриша",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1530325553146-0a7e972b42c9?w=400&h=300&fit=crop",
    category: "Мишки",
    size: "50 см",
    age: "5+",
  },
  {
    id: 5,
    name: "Щенок Дружок",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=400&h=300&fit=crop",
    category: "Собачки",
    size: "28 см",
    age: "3+",
  },
  {
    id: 6,
    name: "Слоник Добряк",
    price: 1350,
    image:
      "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=400&h=300&fit=crop",
    category: "Слоники",
    size: "35 cm",
    age: "2+",
    isNew: true,
  },
];

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? mockProducts
      : mockProducts.filter((product) =>
          product.category.toLowerCase().includes(selectedCategory),
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-800 mb-4">
          Каталог мягких игрушек
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите идеального плюшевого друга из нашей коллекции качественных и
          безопасных игрушек
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
            Игрушки не найдены
          </h3>
          <p className="text-gray-600">Попробуйте выбрать другую категорию</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
