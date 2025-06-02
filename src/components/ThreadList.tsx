import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThreadCard from "@/components/ThreadCard";
import Icon from "@/components/ui/icon";

const mockThreads = [
  {
    id: 1,
    title: "Обсуждение новостей технологий",
    content:
      "Что думаете о последних новинках в мире IT? Поделитесь своим мнением о новых разработках.",
    replies: 42,
    timeAgo: "2 часа назад",
    category: "Технологии",
    isHot: true,
  },
  {
    id: 2,
    title: "Анонимная поддержка",
    content:
      "Место для тех, кому нужна помощь или просто хочется поговорить. Здесь вас выслушают.",
    replies: 156,
    timeAgo: "4 часа назад",
    category: "Поддержка",
    isSticky: true,
  },
  {
    id: 3,
    title: "Философские размышления",
    content:
      "Что такое смысл жизни? Давайте обсудим глубокие вопросы бытия без осуждения.",
    replies: 89,
    timeAgo: "6 часов назад",
    category: "Философия",
  },
  {
    id: 4,
    title: "Творчество и искусство",
    content:
      "Делитесь своими работами, обсуждайте искусство, находите вдохновение.",
    replies: 23,
    timeAgo: "8 часов назад",
    category: "Творчество",
  },
  {
    id: 5,
    title: "Случайные мысли",
    content:
      "Всё что приходит в голову. Просто выплескивайте мысли в этот тред.",
    replies: 312,
    timeAgo: "12 часов назад",
    category: "Общее",
    isHot: true,
  },
];

const ThreadList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const categories = [
    "Все",
    "Технологии",
    "Поддержка",
    "Философия",
    "Творчество",
    "Общее",
  ];

  const filteredThreads = mockThreads.filter((thread) => {
    const matchesSearch =
      thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Все" || thread.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-3 text-gray-400"
            />
            <Input
              placeholder="Поиск по тредам..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredThreads.map((thread) => (
          <ThreadCard key={thread.id} {...thread} />
        ))}
      </div>

      {filteredThreads.length === 0 && (
        <div className="text-center py-12">
          <Icon
            name="MessageSquare"
            size={48}
            className="mx-auto text-gray-600 mb-4"
          />
          <p className="text-gray-400">Тредов не найдено</p>
        </div>
      )}
    </div>
  );
};

export default ThreadList;
