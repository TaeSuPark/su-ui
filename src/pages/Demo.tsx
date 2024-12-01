import { FlexBox, HStack, Typography, VStack } from "../libs"

type DemoProps = {}

export default function Demo({}: DemoProps) {
  return (
    <VStack gap={4}>
      <Typography>Demo1</Typography>
      <Typography>Demo2</Typography>
      <Typography>Demo3</Typography>
      <HStack gap={4}>
        <Typography>Demo4</Typography>
        <Typography>Demo5</Typography>
        <Typography>Demo6</Typography>
      </HStack>
    </VStack>
  )
}
