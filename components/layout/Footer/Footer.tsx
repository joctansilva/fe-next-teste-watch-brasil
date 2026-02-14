import { cn } from "@/lib/utils";

export function Footer({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer
      className={cn(
        "w-full border-t border-white/10 bg-neutral-900 text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}
