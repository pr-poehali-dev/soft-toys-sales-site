import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const mockProducts = [
  {
    id: 1,
    name: "Вишня Владимирская",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?w=400&h=300&fit=crop",
    variety: "Кислая",
    weight: "500 г",
    isOrganic: true,
  },
  {
    id: 2,
    name: "Черешня Наполеон",
    price: 380,
    image:
      "https://images.unsplash.com/photo-1592067135449-8b79b1169e6b?w=400&h=300&fit=crop",
    variety: "Сладкая",
    weight: "500 г",
  },
  {
    id: 3,
    name: "Вишня Шоколадница",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?w=400&h=300&fit=crop",
    variety: "Кисло-сладкая",
    weight: "500 г",
    isOrganic: true,
  },
  {
    id: 4,
    name: "Черешня Бигарро",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1586191433320-d1b729d7aa50?w=400&h=300&fit=crop",
    variety: "Сладкая",
    weight: "500 г",
  },
  {
    id: 5,
    name: "Вишня Морель",
    price: 290,
    image:
      "https://images.unsplash.com/photo-1623130268087-46afa05dfb25?w=400&h=300&fit=crop",
    variety: "Кислая",
    weight: "1 кг",
  },
  {
    id: 6,
    name: "Черешня Ревна",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1571683655148-4e4e5c6d8cb6?w=400&h=300&fit=crop",
    variety: "Сладкая",
    weight: "500 г",
    isOrganic: true,
  },
];

const ProductCatalog = () => {
  const [selectedVariety, setSelectedVariety] = useState("all");

  const filteredProducts =
    selectedVariety === "all"
      ? mockProducts
      : mockProducts.filter((product) =>
          product.variety.toLowerCase().includes(selectedVariety),
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Каталог свежей вишни
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Выберите лучшие сорта вишни и черешни из нашего садового хозяйства
        </p>
      </div>

      <ProductFilters
        selectedVariety={selectedVariety}
        onVarietyChange={setSelectedVariety}
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
          <p className="text-gray-600">Попробуйте выбрать другой сорт</p>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
