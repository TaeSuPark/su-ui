type TypographyProps = {
  children: React.ReactNode
}

export default function Typography({ children }: TypographyProps) {
  return <span className="flex whitespace-normal font-sans">{children}</span>
}
