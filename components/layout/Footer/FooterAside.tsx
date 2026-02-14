import { cn } from "@/lib/utils";

export function FooterAside({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col items-start gap-6 lg:items-end", className)}
      {...props}
    />
  );
}
