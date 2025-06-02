import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">
            Мягкие игрушки для счастья 🧸
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Плюшевые друзья, которые подарят радость и уют! Мишки, зайчики,
            котики — найдите идеального спутника для вашего малыша.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
              <Icon name="ShoppingCart" size={20} />
              Смотреть каталог
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              <Icon name="Heart" size={20} />
              Избранное
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
