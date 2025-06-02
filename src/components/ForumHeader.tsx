import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ForumHeader = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🕶️</span>
            <h1 className="text-xl font-bold text-white">AnonTalk</h1>
            <Badge variant="secondary" className="bg-green-600 text-white">
              Online
            </Badge>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Правила
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Помощь
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Icon name="Plus" size={16} className="mr-2" />
              Новый тред
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForumHeader;
