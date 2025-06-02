import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ThreadCardProps {
  id: number;
  title: string;
  content: string;
  replies: number;
  timeAgo: string;
  category: string;
  isHot?: boolean;
  isSticky?: boolean;
}

const ThreadCard = ({
  title,
  content,
  replies,
  timeAgo,
  category,
  isHot,
  isSticky,
}: ThreadCardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          {isSticky && (
            <Icon name="Pin" size={16} className="text-yellow-500" />
          )}
          {isHot && <Icon name="Flame" size={16} className="text-orange-500" />}
          <Badge
            variant="outline"
            className="text-xs border-gray-600 text-gray-300"
          >
            {category}
          </Badge>
        </div>
        <span className="text-gray-500 text-sm">{timeAgo}</span>
      </div>

      <h3 className="text-white font-medium mb-2 line-clamp-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-3 line-clamp-3">{content}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <div className="flex items-center space-x-1">
            <Icon name="MessageSquare" size={14} />
            <span>{replies}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Eye" size={14} />
            <span>{Math.floor(Math.random() * 500) + 50}</span>
          </div>
        </div>
        <span className="text-gray-600 text-xs">
          Аноним #{Math.floor(Math.random() * 999999)}
        </span>
      </div>
    </div>
  );
};

export default ThreadCard;
