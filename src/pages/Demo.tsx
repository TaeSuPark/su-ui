import { FlexBox, HStack, Typography, VStack } from "../libs"

type DemoProps = {}

export default function Demo({}: DemoProps) {
  return (
    <VStack>
      <VStack>
        <Typography typoColor="black" size="sm">
          Demo Page
        </Typography>
      </VStack>
    </VStack>
  )
}
