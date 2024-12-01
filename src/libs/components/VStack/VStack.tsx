import { VariantProps } from "class-variance-authority"
import { VStackVariants } from "../../styles/styles"
import cn from "../../utils/cn"

interface VStackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof VStackVariants> {
  children: React.ReactNode | React.ReactNode[]
  additionalCss?: string
}

export default function VStack({
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
}: VStackProps) {
  return (
    <div
      className={cn(
        VStackVariants({
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
