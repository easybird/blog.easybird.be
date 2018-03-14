import glamorous from "glamorous";
import Color from "color";
import { mediaQueries, colors } from "./globalStyles";

const CARD_HEIGHT = "23";
const CARD_WIDTH = CARD_HEIGHT;

const content = {
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0 auto",
  width: "100%",
};

export const ContainerDiv = glamorous.section({
  padding: 0,
  margin: "0 auto",
});

export const ContentDiv = glamorous.div({
  ...content,
  maxWidth: "740px",
});

export const SiteTitleDiv = glamorous.div({
  justifyContent: "center",
  display: "flex",
});

export const HeroDiv = glamorous.div({
  width: "100%",
  maxHeight: "50%",
  marginTop: "80px",
  marginBottom: "80px",
  margin: "0 auto",
});

export const HeroImg = glamorous.img({
  width: "100%",
});

const listingImageDivClassName = "listingImageDivClassName";
const listingImageClassName = "listingImageClassName";
const excerptClassName = "excerptClassName";

export const getListingImgDiv = url =>
  glamorous.div(listingImageDivClassName, {
    width: "100%",
    height: `${CARD_HEIGHT * 0.8}em`,
    background: `url(${url}) no-repeat center center`,
    backgroundSize: "cover",
    transition: "all 0.3s linear 0s",
  });

export const ListingImg = glamorous.img(listingImageClassName, {
  visibility: "hidden",
});

const textStyle = {
  textAlign: "center",
  marginTop: "5px",
  color: colors.baseColor,
};

export const ListingText = glamorous.p({
  ...textStyle,
  fontSize: "90%",
  marginBottom: 0,
});

export const ListingDiv = glamorous.div({
  ...content,
  maxWidth: "1024px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const ListingTile = glamorous.div({
  display: "flex",
  paddingLeft: "5%",
  paddingRight: "5%",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const ListingTitle = glamorous.h4({
  ...textStyle,
  display: "flex",
  paddingLeft: "5%",
  paddingRight: "5%",
  flexDirection: "row",
  justifyContent: "center",
});

export const ListingExcerpt = glamorous.div(excerptClassName, {
  visibility: "hidden",
  paddingLeft: "5%",
  paddingRight: "5%",
  flexDirection: "row",
  alignSelf: "center",
});

export const ListingCard = glamorous.div({
  position: "relative",
  [mediaQueries.mediumUp]: {
    maxWidth: "50%",
    minWidth: "33%",
  },
  height: `${CARD_HEIGHT}em`,
  width: `${CARD_WIDTH}em`,
  margin: "1%",
  display: "flex",
  flexDirection: "column",
  boxShadow: `0px 1px 2px 0px ${Color(colors.black)
    .alpha(0.2)
    .rgbaString()}`,
  transition: "all 0.3s linear 0s",
  overflow: "hidden",
  opacity: 0.9,
  ":hover": {
    opacity: 1,
    [`& .${listingImageDivClassName}`]: {
      height: `${CARD_HEIGHT * 0.5}em`,
      transform: "scale(0.9)",
    },
    [`& .${excerptClassName}`]: {
      visibility: "visible",
    },
  },
});
