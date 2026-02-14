import { Info, Star, AlertCircle, Megaphone, ArrowRight, ExternalLink, ChevronRight } from "lucide-react";

export const getBadgeIcon = (iconName: string) => {
  const icons = {
    info: <Info />,
    star: <Star />,
    alert: <AlertCircle />,
    megaphone: <Megaphone />,
  };

  return icons[iconName as keyof typeof icons] || null;
};

export const getButtonIcon = (iconName: string) => {
  const icons = {
    "arrow-right": <ArrowRight />,
    "external-link": <ExternalLink />,
    "chevron-right": <ChevronRight />,
  };

  return icons[iconName as keyof typeof icons] || null;
};
