import { cn } from "@/lib/utils";

export function FooterSocial({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-6 flex items-center gap-6 text-neutral-400", className)}
      {...props}
    />
  );
}
