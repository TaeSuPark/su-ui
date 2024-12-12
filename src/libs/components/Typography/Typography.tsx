import { VariantProps } from "class-variance-authority"
import cn from "../../utils/cn"
import { TypographyVariants } from "../../styles"
interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
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
    <p
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
    </p>
  )
}
