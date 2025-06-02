import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="">Свежайшая вишня 🍒</h1>
          <p className="text-xl text-gray-600 mb-8">
            Лучшие сорта вишни и черешни с собственных садов. Доставляем
            свежесть прямо к вашему столу!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Icon name="ShoppingCart" size={20} />
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Phone" size={20} />
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
