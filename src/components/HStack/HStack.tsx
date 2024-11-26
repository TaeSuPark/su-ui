type HStackProps = {
  children: React.ReactNode
}

export default function HStack({ children }: HStackProps) {
  return <div style={{ display: "flex" }}>{children}</div>
}
