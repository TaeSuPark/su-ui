import { VariantProps } from "class-variance-authority"
import { TypographyVariants } from "../../styles/styles"
import cn from "../../utils/cn"

interface TypographyProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof TypographyVariants> {
  children: React.ReactNode | React.ReactNode[]
  additionalCss?: string
}

export default function Typography({
  children,
  typoColor,
  size,
  weight,
  whiteSpace,
  additionalCss,
  ...props
}: TypographyProps) {
  return (
    <span
      className={cn(
        TypographyVariants({
          typoColor,
          size,
          weight,
          whiteSpace,
        }),
        additionalCss
      )}
      {...props}
    >
      {children}
    </span>
  )
}
