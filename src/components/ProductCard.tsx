import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  variety: string;
  weight: string;
  isOrganic?: boolean;
}

const ProductCard = ({
  name,
  price,
  image,
  variety,
  weight,
  isOrganic,
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
          {isOrganic && (
            <Badge className="absolute top-2 left-2 bg-green-500">Эко</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Badge
          variant="outline"
          className="mb-2 text-xs text-red-600 border-red-200"
        >
          {variety}
        </Badge>
        <CardTitle className="text-lg mb-2 line-clamp-2">{name}</CardTitle>
        <p className="text-sm text-gray-600 mb-3">{weight}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-600">{price} ₽</span>
          <Button size="sm" className="bg-red-600 hover:bg-red-700">
            <Icon name="Plus" size={16} />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
