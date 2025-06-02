import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  size: string;
  age?: string;
  isNew?: boolean;
}

const ProductCard = ({
  name,
  price,
  image,
  category,
  size,
  age,
  isNew,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-yellow-400 text-yellow-900">
              Новинка
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge
          variant="outline"
          className="mb-2 text-xs text-pink-600 border-pink-200"
        >
          {category}
        </Badge>
        <CardTitle className="text-lg mb-2 line-clamp-2">{name}</CardTitle>
        <p className="text-sm text-gray-600 mb-1">{size}</p>
        {age && <p className="text-xs text-blue-600 mb-3">Возраст: {age}</p>}
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">{price} ₽</span>
          <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
            <Icon name="Plus" size={16} />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
