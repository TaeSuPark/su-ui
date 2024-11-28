import { FlexBox, HStack, Typography, VStack } from "../libs"

type DemoProps = {}

export default function Demo({}: DemoProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold">Demo</h1>
      <p className="text-lg">This is a demo page</p>
      <FlexBox>FlexBox</FlexBox>
      <VStack>VStack</VStack>
      <HStack>HStack</HStack>
      <Typography>Typography</Typography>
    </div>
  )
}
