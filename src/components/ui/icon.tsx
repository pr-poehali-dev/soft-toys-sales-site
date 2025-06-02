import {
  ShoppingCart,
  Plus,
  CircleAlert,
  Phone,
  Heart,
  Star,
  Baby,
  type LucideIcon,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  fallback?: string;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Plus,
  CircleAlert,
  Phone,
  Heart,
  Star,
  Baby,
};

const Icon = ({
  name,
  size = 24,
  fallback = "CircleAlert",
  className,
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback] || CircleAlert;

  return <IconComponent size={size} className={className} />;
};

export default Icon;
