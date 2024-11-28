type HStackProps = {
  children: React.ReactNode
}

export default function HStack({ children }: HStackProps) {
  return <div className="flex flex-row">{children}</div>
}
