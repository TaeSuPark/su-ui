type FlexBoxProps = {
  children: React.ReactNode
}

export default function FlexBox({ children }: FlexBoxProps) {
  return <div className="flex">{children}</div>
}
