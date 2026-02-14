import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      hero: "text-[32px] leading-[120%] font-bold",
      title: "text-2xl leading-[120%] font-bold",
      subtitle: "text-lg leading-[120%] font-bold",
      paragraph: "text-base leading-[140%] font-normal",
      small: "text-xs leading-[130%] font-normal",
      nano: "text-sm leading-[100%] font-normal",
    },
  },
  defaultVariants: {
    variant: "paragraph",
  },
});

// Mapa de variantes para elementos HTML padrão
const defaultElements: Record<
  NonNullable<VariantProps<typeof textVariants>["variant"]>,
  ElementType
> = {
  hero: "h3",
  title: "h4",
  subtitle: "h5",
  paragraph: "p",
  small: "span",
  nano: "p",
};

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  VariantProps<typeof textVariants>;

const TextComponent = forwardRef(
  <T extends ElementType = "p">(
    { variant = "paragraph", as, className, children, ...props }: TextProps<T>,
    ref?: React.Ref<HTMLElement>,
  ) => {
    const Component = as || (variant ? defaultElements[variant] : "p") || "p";

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

TextComponent.displayName = "Text";

export const Text = TextComponent as <T extends ElementType = "p">(
  props: TextProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement;
