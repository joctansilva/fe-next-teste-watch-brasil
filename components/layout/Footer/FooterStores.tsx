import { cn } from "@/lib/utils";

export function FooterStores({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex gap-4", className)} {...props} />;
}
