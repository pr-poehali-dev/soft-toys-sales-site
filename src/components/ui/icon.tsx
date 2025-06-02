import { ShoppingCart, Plus, CircleAlert, type LucideIcon } from "lucide-react";

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
