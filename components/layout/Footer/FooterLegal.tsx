import { Text } from "@/components/ui";
import { cn } from "@/lib/utils";

export function FooterLegal({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Text
      variant="small"
      className={cn("leading-relaxed text-neutral-400", className)}
      {...props}
    />
  );
}
