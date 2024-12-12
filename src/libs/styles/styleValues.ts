import { SpaceType } from "./styleTypes"

// font-size
export const fontValues = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
}

// font-weight
export const fontWeightValues = {
  400: "font-normal",
  500: "font-medium",
  700: "font-bold",
}

// text-color
export const textColorValues = {
  inherit: "text-inherit",
  transparent: "text-transparent",
  current: "text-current",
  black: "text-black",
  white: "text-white",
  [`gray-lighter`]: "text-gray-300",
  [`gray-main`]: "text-gray-400",
  [`gray-darker`]: "text-gray-500",
  [`red-lighter`]: "text-red-300",
  [`red-main`]: "text-red-400",
  [`red-darker`]: "text-red-500",
  [`yellow-lighter`]: "text-yellow-300",
  [`yellow-main`]: "text-yellow-400",
  [`yellow-darker`]: "text-yellow-500",
  [`green-lighter`]: "text-green-300",
  [`green-main`]: "text-green-400",
  [`green-darker`]: "text-green-500",
  [`blue-lighter`]: "text-blue-300",
  [`blue-main`]: "text-blue-400",
  [`blue-darker`]: "text-blue-500",
  [`purple-lighter`]: "text-purple-300",
  [`purple-main`]: "text-purple-400",
  [`purple-darker`]: "text-purple-500",
}

// background-color
export const bgColorValues = {
  inherit: "bg-inherit",
  transparent: "bg-transparent",
  current: "bg-current",
  black: "bg-black",
  white: "bg-white",
  [`gray-lighter`]: "bg-gray-300",
  [`gray-main`]: "bg-gray-400",
  [`gray-darker`]: "bg-gray-500",
  [`red-lighter`]: "bg-red-300",
  [`red-main`]: "bg-red-400",
  [`red-darker`]: "bg-red-500",
  [`yellow-lighter`]: "bg-yellow-300",
  [`yellow-main`]: "bg-yellow-400",
  [`yellow-darker`]: "bg-yellow-500",
  [`green-lighter`]: "bg-green-300",
  [`green-main`]: "bg-green-400",
  [`green-darker`]: "bg-green-500",
  [`blue-lighter`]: "bg-blue-300",
  [`blue-main`]: "bg-blue-400",
  [`blue-darker`]: "bg-blue-500",
  [`purple-lighter`]: "bg-purple-300",
  [`purple-main`]: "bg-purple-400",
  [`purple-darker`]: "bg-purple-500",
}

export const spaceValues = (type: SpaceType) => {
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

export const flexBoxCommon = {
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
