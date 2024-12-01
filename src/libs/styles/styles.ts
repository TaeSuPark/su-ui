import { cva } from "class-variance-authority"

type SpaceType =
  | "p"
  | "px"
  | "py"
  | "pt"
  | "pr"
  | "pb"
  | "pl"
  | "m"
  | "mx"
  | "my"
  | "mt"
  | "mr"
  | "mb"
  | "ml"
  | "gap-x"
  | "gap-y"
  | "gap"

const spaceValues = (type: SpaceType) => {
  return {
    0: `${type}-0`,
    2: `${type}-0.5`,
    4: `${type}-1`,
    6: `${type}-1.5`,
    8: `${type}-2`,
    10: `${type}-2.5`,
    12: `${type}-3`,
    14: `${type}-3.5`,
    16: `${type}-4`,
    20: `${type}-5`,
    24: `${type}-6`,
    28: `${type}-7`,
    32: `${type}-8`,
    36: `${type}-9`,
    40: `${type}-10`,
    44: `${type}-11`,
    48: `${type}-12`,
    56: `${type}-14`,
    64: `${type}-16`,
  }
}

const flexBoxCommon = {
  direction: {
    default: "flex-row",
    row: "flex-row",
    column: "flex-col",
  },
  align: {
    default: "items-start",
    start: "items-start",
    center: "items-center",
    end: "items-end",
  },
  justify: {
    default: "justify-start",
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  },
  p: spaceValues("p"),
  px: spaceValues("px"),
  py: spaceValues("py"),
  pt: spaceValues("pt"),
  pr: spaceValues("pr"),
  pb: spaceValues("pb"),
  pl: spaceValues("pl"),
  m: spaceValues("m"),
  mx: spaceValues("mx"),
  my: spaceValues("my"),
  mt: spaceValues("mt"),
  mr: spaceValues("mr"),
  mb: spaceValues("mb"),
  ml: spaceValues("ml"),
}

export const FlexBoxVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap"),
    gapX: spaceValues("gap-x"),
    gapY: spaceValues("gap-y"),
  },
  defaultVariants: {
    direction: "default",
    align: "default",
    justify: "default",
  },
})

export const HStackVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap-x"),
  },
  defaultVariants: {
    direction: "row",
    align: "default",
    justify: "default",
  },
})

export const VStackVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap-y"),
  },
  defaultVariants: {
    direction: "column",
    align: "default",
    justify: "default",
  },
})
