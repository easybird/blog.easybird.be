import Color from "color";

// Inspired by http://foundation.zurb.com/sites/docs/media-queries.html

const smallBreakpoint = 480;
const mediumBreakpoint = 1024;
const largeBreakpoint = 1224;

const [, upperSmallRange] = [0, smallBreakpoint];
const [lowerMediumRange, upperMediumRange] = [
  smallBreakpoint + 1,
  mediumBreakpoint,
];
const [lowerLargeRange, upperLargeRange] = [
  mediumBreakpoint + 1,
  largeBreakpoint,
];

const screen = "only screen";
const statusColors = {
  danger: "#d9534f",
  info: "#5bc0de",
  warning: "#f0ad4e",
  success: "#50af51",
};

export const colors = {
  primary: "#DA233C",
  primaryMed: "#CC3A4B",
  primaryLight: "#FFF2F2",
  secondary: "#BD3D90",
  faded: "#B2C1C0",
  white: "#fff",
  blue: "#28384e",
  purple: "#fe0072",
  lightGray: "#f7f7f7",
  gray: "#cccccc",
  medGray: "#777",
  darkGray: "#333",
  code: "#4F4F4F",
  black: "#000",
  error: "#ff5555",
  ...statusColors,
  baseColor: Color("#000")
    .alpha(0.73)
    .hslaString(),
};

export const fonts = {
  sansserif: '"Montserrat", sans-serif',
  glamorous: '"Playfair Display, serif"',
  monospace: "monospace",
};

export const mediaQueries = {
  smallUp: `@media ${screen}`,
  smallOnly: `@media ${screen} and (max-width: ${upperSmallRange}px)`,
  mediumDown: `@media ${screen} and (max-width: ${lowerMediumRange - 1}px)`,
  mediumUp: `@media ${screen} and (min-width: ${lowerMediumRange}px)`,
  mediumOnly: `@media ${screen} and (min-width: ${
    lowerMediumRange
  }px and (min-width: ${upperMediumRange}px)`,
  largeDown: `@media ${screen} and (max-width: ${lowerLargeRange - 1}px)`,
  largeUp: `@media ${screen} and (min-width: ${lowerLargeRange}px)`,
  largeOnly: `@media ${screen} and (min-width: ${
    lowerLargeRange
  }px and (min-width: ${upperLargeRange}px)`,
};

export const misc = {
  boxShadow: "0.05rem 0.05rem 1.12rem rgba(20, 20, 20, 0.27)",
};

export default { fonts, colors, mediaQueries, misc };
