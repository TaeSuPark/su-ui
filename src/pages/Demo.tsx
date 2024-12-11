import { FlexBox, HStack, Typography, VStack } from "../libs"

type DemoProps = {}

export default function Demo({}: DemoProps) {
  return (
    <VStack gap={4}>
      <Typography typoColor="black" size="sm">
        검은색
      </Typography>
      <Typography size="sm" typoColor={"red-darker"}>
        초록300
      </Typography>
      <Typography size="xl" typoColor={"red-lighter"}>
        초록400
      </Typography>
      <Typography size="2xl" typoColor={"red-main"}>
        초록500
      </Typography>
    </VStack>
  )
}
