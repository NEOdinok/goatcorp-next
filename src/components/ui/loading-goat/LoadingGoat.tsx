import { cn } from "@/lib/utils";
import { IconPictogram } from "public/icons";

interface Props {
  className?: string;
}

export const LoadingGoat = ({ className }: Props): JSX.Element => {
  const classList = cn("h-14 w-14 fill-primary animate-spin", className);
  return <IconPictogram className={classList} />;
};
