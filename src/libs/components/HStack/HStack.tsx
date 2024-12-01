import { VariantProps } from "class-variance-authority"
import { HStackVariants } from "../../styles/styles"
import cn from "../../utils/cn"

interface HStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof HStackVariants> {
  children: React.ReactNode | React.ReactNode[]
  additionalCss?: string
}

export default function HStack({
  children,
  direction,
  align,
  justify,
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  gap,
  additionalCss,
  ...props
}: HStackProps) {
  return (
    <div
      className={cn(
        HStackVariants({
          direction,
          align,
          justify,
          p,
          px,
          py,
          pt,
          pr,
          pb,
          pl,
          m,
          mx,
          my,
          mt,
          mr,
          mb,
          ml,
          gap,
        }),
        additionalCss
      )}
      {...props}
    >
      {children}
    </div>
  )
}
