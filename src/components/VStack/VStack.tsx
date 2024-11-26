type VStackProps = {
  children: React.ReactNode
}

export default function VStack({ children }: VStackProps) {
  return <div style={{ display: "flex" }}>{children}</div>
}
