type TypographyProps = {
  children: React.ReactNode
}

export default function Typography({ children }: TypographyProps) {
  return <span style={{ display: "flex" }}>{children}</span>
}
