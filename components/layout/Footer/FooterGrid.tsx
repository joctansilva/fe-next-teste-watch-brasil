import { cn } from "@/lib/utils";

export function FooterGrid({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        `
        grid gap-10
        md:grid-cols-2
        lg:grid-cols-[1.5fr_1fr]
        `,
        className,
      )}
      {...props}
    />
  );
}
