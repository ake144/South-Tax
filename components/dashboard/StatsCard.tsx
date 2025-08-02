import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'success' | 'warning' | 'info';
}


const getVariantStyles = (variant: StatsCardProps['variant']) => {
  switch (variant) {
    case 'success':
      return 'border-green-200 bg-green-50';
    case 'warning':
      return 'border-yellow-200 bg-yellow-50';
    case 'info':
      return 'border-blue-200 bg-blue-50';
    default:
      return 'border-gray-200 bg-white';
  }
};

const getIconStyles = (variant: StatsCardProps['variant']) => {
  switch (variant) {
    case 'success':
      return 'text-green-600 bg-green-100';
    case 'warning':
      return 'text-yellow-600 bg-yellow-100';
    case 'info':
      return 'text-blue-600 bg-blue-100';
    default:
      return 'text-gray-500 bg-gray-100';
  }
};

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  variant = 'default',
}) => {
  return (
    <Card className={`transition-all duration-200 hover:shadow-md ${getVariantStyles(variant)}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getIconStyles(variant)}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            {typeof value === 'number' ? value.toLocaleString() : value}
          </div>
          {trend && (
            <div className={`text-xs font-medium flex items-center gap-1 ${
              trend.isPositive ? 'text-success' : 'text-destructive'
            }`}>
              <span>{trend.isPositive ? '↗' : '↘'}</span>
              {Math.abs(trend.value)}%
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;