import { forwardRef, ElementType } from "react";

import { cn } from "@/lib/utils";
import { textVariants, defaultElements } from "./Text.variants";
import type { TextProps } from "./Text.types";

const TextComponent = forwardRef(
  <T extends ElementType = "p">(
    { variant = "paragraph", as, className, children, ...props }: TextProps<T>,
    ref?: React.Ref<HTMLElement>
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
  }
);

TextComponent.displayName = "Text";

export const Text = TextComponent as <T extends ElementType = "p">(
  props: TextProps<T> & { ref?: React.Ref<HTMLElement> }
) => React.ReactElement;
