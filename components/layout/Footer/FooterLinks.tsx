import { cn } from "@/lib/utils";

export function FooterLinks({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-8 flex flex-wrap gap-6 text-sm", className)}
      {...props}
    />
  );
}
