type FlexBoxProps = {
  children: React.ReactNode
}

export default function FlexBox({ children }: FlexBoxProps) {
  return <div style={{ display: "flex" }}>{children}</div>
}
