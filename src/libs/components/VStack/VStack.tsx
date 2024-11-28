type VStackProps = {
  children: React.ReactNode
}

export default function VStack({ children }: VStackProps) {
  return <div className="flex flex-col">{children}</div>
}
