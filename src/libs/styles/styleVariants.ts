import { cva } from "class-variance-authority"
import {
  bgColorValues,
  flexBoxCommon,
  fontValues,
  fontWeightValues,
  spaceValues,
  textColorValues,
} from "./styleValues"

export const FlexBoxVariants = cva(`flex`, {
  variants: {
    ...flexBoxCommon,
    gap: spaceValues("gap"),
    gapX: spaceValues("gap-x"),
    gapY: spaceValues("gap-y"),
    backgroundColor: bgColorValues,
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
    backgroundColor: bgColorValues,
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
    backgroundColor: bgColorValues,
  },
  defaultVariants: {
    direction: "column",
    align: "default",
    justify: "default",
  },
})

export const TypographyVariants = cva(``, {
  variants: {
    typoColor: textColorValues,
    size: fontValues,
    weight: fontWeightValues,
    whiteSpace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preLine: "whitespace-pre-line",
      preWrap: "whitespace-pre-wrap",
    },
  },
  defaultVariants: {
    typoColor: "black",
    size: "base",
    weight: 400,
    whiteSpace: "normal",
  },
})
