import { cn } from "@/lib/utils";

export function FooterContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 py-12", className)} {...props} />
  );
}
