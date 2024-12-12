import { VariantProps } from "class-variance-authority"
import { FlexBoxVariants } from "../../styles"
import cn from "../../utils/cn"

interface FlexBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof FlexBoxVariants> {
  children: React.ReactNode | React.ReactNode[]
  additionalCss?: string
}

export default function FlexBox({
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
  gapX,
  gapY,
  gap,
  additionalCss,
  ...props
}: FlexBoxProps) {
  return (
    <div
      className={cn(
        FlexBoxVariants({
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
          gapX,
          gapY,
        }),
        additionalCss
      )}
      {...props}
    >
      {children}
    </div>
  )
}
